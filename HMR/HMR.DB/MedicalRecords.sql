CREATE TABLE [dbo].[MedicalRecords]
(
	[MedicalRecordId] INT NOT NULL PRIMARY KEY IDENTITY, 
	[ProfileCode] NVARCHAR(100) NOT NULL, 
    [Data] NVARCHAR(MAX) NOT NULL, 
    [Created] DATETIME constraint [DF_MedicalRecords_Created] default GETDATE(),
    [Updated] DATETIME NULL,
	

	CONSTRAINT AK_ProfileCode UNIQUE(ProfileCode) 
)
