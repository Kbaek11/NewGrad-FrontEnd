DROP DATABASE IF EXISTS companies;
CREATE DATABASE companies;

\c companies;

CREATE TABLE companies (
  id INTEGER PRIMARY KEY,
  status BIT DEFAULT 0
  name VARCHAR,
);

INSERT INTO companies (status, name)
  VALUES (1, 'facebook');
  VALUES (1, 'amazon');
  VALUES (1, 'microsoft');
  VALUES (1, 'google');




 