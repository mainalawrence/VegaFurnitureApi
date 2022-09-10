CREATE furnitures IF NOT EXIST (
    id SERIAL,
    uid text PRIMARY KEY,
    name varchar(50),
    color varchar(50),
    cost money,
)

-- get some few users;

SELECT * FROM furnitures ORDER BY uid LIMIT n OFFSET offset;

SELECT * FROM furnitures ;

SELECT * from furnitures WHERE uid=1;

DELETE furnitures where uid=1;


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





