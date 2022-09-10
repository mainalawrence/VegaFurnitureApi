CREATE orders IF NOT EXIST (
    id SERIAL,
    uid text PRIMARY KEY,
    amount integer,
    cost money,
    active integer,
    userid text,
    orderdetailuid text,
    FOREIGN KEY (userid) REFERENCES users(uid),
    FOREIGN KEY (orderdetailuid) REFERENCES orderdetails(uid)
)

-- get some few users;

SELECT * FROM orders ORDER BY uid LIMIT n OFFSET offset;

SELECT * FROM orders ;

SELECT * from orders WHERE uid=1;

DELETE orders where uid=1;


-- Update new value in the column c1 for all rows

UPDATE orders SET active = 1 WHERE uid=1;


-- Delete the table from the database
DROP TABLE orders CASCADE;

-- Add a new column to the table
 
ALTER TABLE orders ADD column; 

-- Remove all data in a table

TRUNCATE TABLE furnitures CASCADE;


-- total number if binary_upgrade_set_record_init_privs

SELECT  count(*) from orders;





