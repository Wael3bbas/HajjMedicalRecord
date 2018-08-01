CREATE TABLE [dbo].[MedicalRecords]
(
	[MedicalRecordId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Data] NVARCHAR(MAX) NOT NULL, 
    [Created] DATETIME constraint [DF_MedicalRecords_Created] default GETDATE(),
    [Updated] DATETIME NULL
)
