CREATE PROCEDURE createUser (@EMAIL VARCHAR(200), @FIRSTNAME VARCHAR(200), @LASTNAME VARCHAR(200), @PASSWORD VARCHAR(200),
@CONFIRM_PWD VARCHAR(200))
AS
BEGIN
	IF EXISTS(SELECT * FROM USERS WHERE EMAIL = @EMAIL)
	BEGIN
		RAISERROR ('User already Exists',11,1);
		RETURN;
	END
	ELSE
	BEGIN
		INSERT INTO dbo.USERS( EMAIL, FIRSTNAME, LASTNAME, PASSWORD, CONFIRM_PWD)
		VALUES (@EMAIL, @FIRSTNAME, @LASTNAME, @PASSWORD, @CONFIRM_PWD)
	END
END