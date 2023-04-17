CREATE DATABASE CowList;

USE CowList;

CREATE TABLE cows (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

/* Invoke using mysql -u root < database/schema.sql */