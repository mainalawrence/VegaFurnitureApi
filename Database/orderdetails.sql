CREATE TABLE orderdetails(
    id SERIAL,
    uid text PRIMARY KEY,
    orders jsonb
)

-- get some few users;

SELECT * FROM orderdetails ORDER BY uid LIMIT n OFFSET offset;

SELECT * FROM orderdetails ;

SELECT * from orderdetails WHERE uid=1;

DELETE orderdetails where uid=1;


-- Update new value in the column c1 for all rows

UPDATE orderdetails SET active = 1 WHERE uid=1;


-- Delete the table from the database
DROP TABLE orderdetails CASCADE;

-- Add a new column to the table
 
ALTER TABLE orderdetails ADD column; 

-- Remove all data in a table

TRUNCATE TABLE furnitures CASCADE;

-- total number if binary_upgrade_set_record_init_privs

SELECT  count(*) from orderdetails;





