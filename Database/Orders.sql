
----PRODUCTS SECTION BEGINS HERE

CREATE TABLE Orders
(
    id VARCHAR(100) PRIMARY KEY ,
    userid VARCHAR(100),
    TotalCost money NOT NULL,
    orders nvarchar(max),
    status VARCHAR(20),
    paymentDetails nvarchar(max),
    mailed int ,
    date DATETIME,
    CONSTRAINT fk_customer FOREIGN KEY(userid)
REFERENCES Users(id)
        ON
DELETE CASCADE
        ON
UPDATE CASCADE
)

-- DROP TABLE Orders

--INSERT PRODUCT STORED PROCEDURE
go
CREATE OR ALTER PROC createOrders(
    @id VARCHAR(100),
    @userid VARCHAR(100) ,
    @TotalCost money,
    @orders nvarchar(max),
    @status VARCHAR(100),
    @paymentDetails nvarchar
(max)
)
AS
BEGIN
    INSERT INTO Orders
    VALUES(@id, @userid, @TotalCost, @orders,@status,@paymentDetails,0, CURRENT_TIMESTAMP)
--VALUES('qwerrty12334', 'JavaScript', 'It is a Javascript book', 234)
END
go

--GET PRODUCT STORED PROCEDURE
Create or ALTER PROCEDURE getOrderById(@id VARCHAR(100))
AS
BEGIN
    SELECT *
    from Orders
    WHERE id=@id
END
go

--GET ALL PRODUCTS STORED PROCEDURE
CREATE or alter PROC getOrders
AS
BEGIN
    SELECT *
    FROM Orders
END

go
--UPDATE PRODUCT STORED PROCEDURE
CREATE or ALTER PROC updateOrder
    (
    @id VARCHAR
(100),
    @userid VARCHAR
(100) ,
    @TotalCost money,
    @orders nvarchar
(max),

@status VARCHAR
(100),
    @paymentDetails nvarchar
(max)
)
AS
BEGIN
    UPDATE Orders SET userid=@userid, TotalCost=@TotalCost, orders=@orders, paymentDetails=@paymentDetails,status=@status WHERE id=@id
end
 go

GO
CREATE or ALTER PROC updateOrderStatus
    (
    @id VARCHAR(100),
    @status VARCHAR(100)
    )
AS
BEGIN

UPDATE Orders SET status=@status WHERE id=@id;
END

GO


CREATE OR ALTER PROC getOrderCount
AS
BEGIN
SELECT COUNT(id),SUM(TotalCost) FROM Orders;
END
go

--DELETE PRODUCT STORED PROCEDURE
CREATE or alter PROC deleteOrders(@id VARCHAR(100))
AS
BEGIN
    DELETE FROM Orders WHERE id=@id
END
go


go
--GET ALL PRODUCTS STORED PROCEDURE
CREATE or alter PROC SearchOrder(@name VARCHAR(100))
AS
BEGIN
    SELECT *
    FROM Products
    WHERE name LIKE '@name%'
END

go
exec getOrders