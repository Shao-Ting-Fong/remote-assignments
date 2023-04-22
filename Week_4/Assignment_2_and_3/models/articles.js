const mysql = require("mysql2");
const dotenv = require("dotenv");
const path = require("path");
const { getUsersID } = require("./users");

dotenv.config({ path: path.join(__dirname, "/../.env") });

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

const getArticles = async () => {
  const [rows] = await pool.query("SELECT * FROM articles");
  return rows;
};

const generateArticles = async (num) => {
  const usersID = await getUsersID();
  await pool.query("TRUNCATE TABLE articles;");
  for (let i = 0; i < num; i++) {
    let title = `Article ${i + 1}`;
    let content =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!";
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

const findArticleByUserID = async (id) => {
  const [rows] = await pool.query("SELECT * FROM articles WHERE author_id = ?", [id]);
  return rows;
};

module.exports = {
  findArticleByUserID,
};
