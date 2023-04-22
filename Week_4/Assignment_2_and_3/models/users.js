const mysql = require("mysql2");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "/../.env") });

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

const getUserById = async (id) => {
  const [rows] = await pool.query(`SELECT * FROM users WHERE id = ?`, [id]);
  return rows[0];
};

const getUserByEmail = async (email) => {
  const [rows] = await pool.query(`SELECT * FROM users WHERE email = ?`, [email]);
  return rows[0];
};

const register = async (email, password) => {
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

const login = async (email, password) => {
  const foundUser = await getUserByEmail(email);
  if (!foundUser) throw new Error("Invalid user email or password.");

  const isValid = await bcrypt.compare(password, foundUser.password);
  if (!isValid) throw new Error("Invalid user email or password.");

  return foundUser;
};

module.exports = {
  getUsersID,
  getUserById,
  register,
  login,
};
