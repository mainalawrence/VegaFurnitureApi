CREATE userdetails IF NOT EXIST (
    id serial,
    uid text PRIMARY KEY,
    user jsonb,
    userid text,
     FOREIGN KEY (userid) REFERENCES users(uid),

)

-- get some few userdetails;

SELECT * FROM userdetails ORDER BY uid LIMIT n OFFSET offset;

SELECT * FROM userdetails ;

SELECT * from userdetails WHERE uid=1;

DELETE userdetails where uid=1;


-- Update new value in the column c1 for all rows

UPDATE userdetails SET active = 1 WHERE uid=1;


-- Delete the table from the database
DROP TABLE userdetails CASCADE;

-- Add a new column to the table
 
ALTER TABLE userdetails ADD column; 

-- Remove all data in a table

TRUNCATE TABLE t CASCADE;


-- total number if binary_upgrade_set_record_init_privs

SELECT  count(*) from userdetails;





