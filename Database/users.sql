CREATE TABLE  [IF NOT EXISTS] users(
    id serial,
    uid text PRIMARY KEY,
    firstName varchar(50),
    lastName varchar(50),
    email varchar(50),
    phone varchar(20),
    password varchar(200),
    active int,
    role int
)




-- get some few users;

SELECT * FROM users ORDER BY uid LIMIT n OFFSET offset;

SELECT * FROM users WHERE active=1;
SELECT * FROM users WHERE active=0;

SELECT * from users WHERE uid=1;

DELETE users where uid=1;


-- Update new value in the column c1 for all rows

UPDATE users SET active = 1 WHERE uid=1;


-- Delete the table from the database
DROP TABLE users CASCADE;

-- Add a new column to the table
 
ALTER TABLE users ADD column; 

-- Remove all data in a table

TRUNCATE TABLE t CASCADE;


-- total number if binary_upgrade_set_record_init_privs

SELECT  count(*) from users;





