CREATE DATABASE assignment;
USE assignment;

CREATE TABLE users(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
  );

INSERT INTO users (email, password)
VALUES
("abc@gmail.com", "password");

CREATE TABLE articles(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  author_id INTEGER FOREIGN KEY REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
  );