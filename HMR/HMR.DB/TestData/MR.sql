USE [HMRDB]
GO

DELETE FROM [dbo].[MedicalRecords];
Go

INSERT [dbo].[MedicalRecords] ([ProfileCode], [Data], [Created], [Updated]) VALUES (12345, N'{
    "personalInfo": {
      "fullName": "Zimmerman Hunter",
      "nationality": 6303,
      "birthDate": "1979-11-23T12:25:15 -03:00",
      "pasportNumber": "A9501207",
      "Gender": "male",
      "BloodType": "B-",
      "Address": "712 Empire Boulevard, Glenville, Florida, 8707"
    },
    "diseases": [
      {
        "medicines": ["DATAGENE","ENTROPIX"],
        "name": "Disease 11",
        "description": "Disease 12 is redoculas"
      },
      {
        "medicines": ["GRUPOLI","KIGGLE"],
        "name": "Disease 9",
        "description": "Disease 10 is redoculas"
      }
    ],
    "emergancyContacts": [
      {
        "Type": "Brother",
        "fullName": "Sybil Flowers",
        "phone": "+966 (917) 491-3998"
      },
      {
        "Type": "Father",
        "fullName": "Glenn Fulton",
        "phone": "+966 (845) 505-2294"
      },
      {
        "Type": "other",
        "fullName": "Annabelle Walton",
        "phone": "+966 (876) 491-2178"
      }
    ]
  }', getdate(), NULL)
GO
INSERT [dbo].[MedicalRecords] ([ProfileCode], [Data], [Created], [Updated]) VALUES (67890, N'{
    "personalInfo": {
      "fullName": "Ramsey Lang",
      "nationality": 2499,
      "birthDate": "1983-10-22T10:39:57 -03:00",
      "pasportNumber": "A9782937",
      "Gender": "male",
      "BloodType": "B+",
      "Address": "940 Metrotech Courtr, Taft, California, 6311"
    },
    "diseases": [
      {
        "medicines": ["DATAGENE","ENTROPIX"],
        "name": "Disease 2",
        "description": "Disease 1 is redoculas"
      },
      {
        "medicines": ["DATAGENE","ENTROPIX"],
        "name": "Disease 3",
        "description": "Disease 8 is redoculas"
      }
    ],
    "emergancyContacts": [
      {
        "Type": "Child",
        "fullName": "Oconnor Morgan",
        "phone": "+966 (804) 437-2072"
      },
      {
        "Type": "other",
        "fullName": "Erica Brewer",
        "phone": "+966 (914) 559-2331"
      },
      {
        "Type": "Father",
        "fullName": "Hernandez Cantrell",
        "phone": "+966 (979) 549-3476"
      }
    ]
  }', getdate(), NULL)
GO
INSERT [dbo].[MedicalRecords] ([ProfileCode], [Data], [Created], [Updated]) VALUES (54321, N'{
    "personalInfo": {
      "fullName": "Cynthia Short",
      "nationality": 6816,
      "birthDate": "2012-08-19T04:34:12 -03:00",
      "pasportNumber": "A6770059",
      "Gender": "female",
      "BloodType": "B+",
      "Address": "184 Senator Street, Topaz, Connecticut, 9815"
    },
    "diseases": [
      {
        "medicines":["DATAGENE","ENTROPIX"],
        "name": "Disease 6",
        "description": "Disease 3 is redoculas"
      },
      {
        "medicines":["DATAGENE","ENTROPIX"],
        "name": "Disease 11",
        "description": "Disease 5 is redoculas"
      }
    ],
    "emergancyContacts": [
      {
        "Type": "Doctor",
        "fullName": "Singleton Gill",
        "phone": "+966 (960) 483-3609"
      },
      {
        "Type": "Father",
        "fullName": "Darlene Stout",
        "phone": "+966 (928) 409-3440"
      },
      {
        "Type": "Brother",
        "fullName": "Josefa Booker",
        "phone": "+966 (897) 406-2029"
      }
    ]
  }', GETDATE(), NULL)
GO