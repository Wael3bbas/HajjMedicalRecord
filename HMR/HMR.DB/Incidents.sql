CREATE TABLE [dbo].[Incidents]
(
	[IncidentId] INT NOT NULL PRIMARY KEY IDENTITY, 
	[ProfileCode] NVARCHAR(100) NOT NULL, 
    [Description] NVARCHAR(MAX) NOT NULL, 
	[Location] NVARCHAR(300) NOT NULL, 
    [Created] DATETIME constraint [DF_Incidents_Created] default GETDATE(),
    [Updated] DATETIME NULL
)
