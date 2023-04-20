const mysql = require("mysql2");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

const getUsersID = async () => {
  const [rows] = await pool.query("SELECT id FROM users");
  return rows.map((ele) => ele.id);
};

module.exports.getUserById = async (id) => {
  const [rows] = await pool.query(`SELECT * FROM users WHERE id = ?`, [id]);
  return rows[0];
};

const getUserByEmail = async (email) => {
  const [rows] = await pool.query(`SELECT * FROM users WHERE email = ?`, [email]);
  return rows[0];
};

const getArticles = async () => {
  const [rows] = await pool.query("SELECT * FROM articles");
  return rows;
};

const generateArticles = async (num) => {
  const usersID = await getUsersID();
  await pool.query("TRUNCATE TABLE articles;");
  for (let i = 0; i < num; i++) {
    let title = `Article ${i + 1}`;
    let content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!";
    await pool.query(
      `
      INSERT INTO articles (author_id, title, content)
      VALUES (?, ?, ?)
      `,
      [usersID[i % usersID.length], title, content]
    );
  }
  const result = await getArticles();
  return result;
};

module.exports.findArticleByUserID = async (id) => {
  const [rows] = await pool.query("SELECT * FROM articles WHERE author_id = ?", [id]);
  return rows;
};

module.exports.register = async (email, password) => {
  const hashPassword = await bcrypt.hash(password, 12);
  const [result] = await pool.query(
    `
  INSERT INTO users (email, password)
  VALUES (?, ?)
  `,
    [email, hashPassword]
  );
  const id = result.insertId;
  return getUserById(id);
};

module.exports.login = async (email, password) => {
  const foundUser = await getUserByEmail(email);
  if (!foundUser) throw new Error("Invalid user email or password.");

  const isValid = await bcrypt.compare(password, foundUser.password);
  if (!isValid) throw new Error("Invalid user email or password.");

  return foundUser;
};

// async function main() {
//   // const articles = await generateArticles(30);
//   const articles = await findArticleByUserID(1);
//   console.log(articles);
// }

// main();
// const result = await createNote("test", "test");
// console.log(result);
