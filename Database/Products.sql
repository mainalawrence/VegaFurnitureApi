
----PRODUCTS SECTION BEGINS HERE
-- DROP TABLE products
CREATE TABLE Products
(
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(50),
    price money NOT NULL ,
    brand VARCHAR(100),
    images nvarchar(max),
    category VARCHAR(20),
    description VARCHAR(300),
    features nvarchar(max),
    specification nvarchar(max),
    deleted DATETIME
) 

-- DROP TABLE Products
--INSERT PRODUCT STORED PROCEDURE
go
CREATE OR ALTER PROC createProduct(
    @id VARCHAR(100),
    @name VARCHAR(100),
    @price money,
    @brand VARCHAR(100),
    @images nvarchar(max),
    @category VARCHAR(100),
    @description VARCHAR(300),
    @features nvarchar(max),
    @specification nvarchar(max))
AS
BEGIN
    INSERT INTO Products
    VALUES(@id, @name, @price, @brand, @images, @category, @description, @features, @specification, null)
END
go

--GET PRODUCT STORED PROCEDURE
Create or ALTER PROCEDURE getProductById(@id VARCHAR(100))
AS
BEGIN
    SELECT *
    from Products
    WHERE id=@id AND deleted=null
END
go

--GET ALL PRODUCTS STORED PROCEDURE
CREATE or alter PROC getProducts
AS
BEGIN
    SELECT *
    FROM Products
    WHERE deleted is NULL
END

go
EXECUTE getProducts
go
--UPDATE PRODUCT STORED PROCEDURE
CREATE or ALTER PROC updateProduct
    (
    @id VARCHAR(100),
    @name VARCHAR(100),
    @price money,
    @brand VARCHAR(100),
    @images nvarchar(max),
    @category VARCHAR(100),
    @description VARCHAR(300),
    @features nvarchar(max),
    @specification nvarchar(max)
)
AS

BEGIN
    UPDATE Products SET name=@name, price=@price, brand=@brand,images=@images, category=@category, description=@description, features=@features, specification=@specification WHERE id=@id
end
 go

--DELETE PRODUCT STORED PROCEDURE
CREATE or alter PROC deleteProduct(@id VARCHAR(100))
AS
BEGIN
    DELETE FROM Products WHERE id=@id
END
go


 go

--DELETE PRODUCT STORED PROCEDURE
CREATE or alter PROC SoftdeleteProduct(@id VARCHAR(100))
AS
BEGIN

    UPDATE Products SET deleted=CURRENT_TIMESTAMP  WHERE id=@id
END
go
go

--GET ALL PRODUCTS STORED PROCEDURE
CREATE or alter PROC filterProducts
AS
BEGIN
    SELECT *
    FROM Products
    WHERE deleted
=null
END

go

go
--GET ALL PRODUCTS STORED PROCEDURE
CREATE or alter PROC SearchProducts(@name VARCHAR(100))
AS
BEGIN
    SELECT *
    FROM Products
    WHERE name LIKE '@name%' AND deleted=null
END

go
exec getProducts


go
CREATE or alter PROC trushedProducts
AS
BEGIN
    SELECT *
    FROM Products
    WHERE deleted is NOT NULL
END
go
