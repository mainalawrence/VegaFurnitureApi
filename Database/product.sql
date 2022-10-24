CREATE TABLE furnitures  (
    id SERIAL,
    uid text PRIMARY KEY,
    name varchar(50),
    type varchar(50),
    color varchar(50),
    cost money,
    measurement varchar(50),
    deriveryTime time,
    pictures jsonb,
    active int
)

SELECT Now();
-- get some few users;

SELECT * FROM furnitures ORDER BY uid LIMIT n OFFSET offset;

SELECT * FROM furnitures ;

SELECT * from furnitures WHERE uid=1;

DELETE furnitures where uid=1;

-- DROP table furnitures
-- Update new value in the column c1 for all rows

UPDATE furnitures SET active = 1 WHERE uid=1;


-- Delete the table from the database
DROP TABLE furnitures CASCADE;

-- Add a new column to the table
 
ALTER TABLE furnitures ADD column; 

-- Remove all data in a table

TRUNCATE TABLE furnitures CASCADE;


-- total number if binary_upgrade_set_record_init_privs

SELECT  count(*) from furnitures;





