
--CREATE A LOGIN PROCEDURE
go
CREATE or alter PROC login(@email VARCHAR(100))
AS
BEGIN
    SELECT id, email, firstName, lastName, password, role
    FROM USERS
    WHERE deleted is NULL and email=@email
END
go






