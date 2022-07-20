CREATE TABLE USERS
(
    id VARCHAR(100) PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    image VARCHAR(100),
    role INT,
    deleted DATETIME
)
SELECT * from USERS;
-- DROP TABLE users
--INSERT USER STORED PROCEDURE
go
CREATE OR ALTER PROC createUser(
    @id VARCHAR(100),
    @firstName VARCHAR(50),
    @lastName VARCHAR(50),
    @email VARCHAR(100),
    @password VARCHAR(100),
    @image VARCHAR(100)
)
AS
BEGIN
    INSERT INTO USERS
    VALUES(@id, @firstName, @lastName, @email, @password, @image,0,null)
END

--GET USER STORED PROCEDURE
go
Create or ALTER PROCEDURE getUser(@id VARCHAR(100))
AS
BEGIN
    SELECT *
    from USERS
    WHERE id=@id AND deleted
=null
END
go


--GET USERS STORED PROCEDURE
CREATE or ALTER PROCEDURE  getUsers
AS
BEGIN
    SELECT *
    from USERS WHERE deleted is NULL
END
go

EXEC getUsers;

SELECT *
FROM USERS  ;



--UPDATE USER STORED PROC
go
CREATE or alter PROC updateUser(
    @id VARCHAR(100),
    @firstName VARCHAR(50),
    @lastName VARCHAR(50),
    @email VARCHAR(30),
    @password VARCHAR(100),
    @image VARCHAR(100),
    @role Int
)
AS
BEGIN
    UPDATE USERS SET firstName = @firstName, lastName=@lastName, email = @email, password = @password, image=@image, role=@role WHERE id=@id
END
go

go
CREATE or alter PROCEDURE softDelete(@id VARCHAR(100))
AS
BEGIN
    UPDATE USERS SET deleted = CURRENT_TIMESTAMP WHERE id=@id
END
go



--DELETE USER STORED PROCEDURE
CREATE or alter PROC deleteUser(@id VARCHAR(100))
AS
BEGIN
    DELETE FROM USERS WHERE id=@id
END
go


--get Trush users

CREATE or alter PROC trushedUsers
AS
BEGIN
    SELECT * FROM USERS WHERE deleted is NOT NULL
END
go

exec trushedUsers

SELECT * from USERS;





