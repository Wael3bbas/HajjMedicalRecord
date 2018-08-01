USE [HMRDB]
GO
SET IDENTITY_INSERT [dbo].[MedicalRecords] ON 
GO
INSERT [dbo].[MedicalRecords] ([MedicalRecordId], [Data], [Created], [Updated]) VALUES (1, N'{
  "personalInfo": {
    "fullName": "Kareem Uber Airbnb",
    "nationality": "British",
    "birthDate": "1976-12-12T00:00:00"
  },
  "diseases": [
    {
      "medicines": [
        {
          "activeIngredient": "Mosh 3arf",
          "name": "01 Medicine 01",
          "description": "01 Description 01"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "01 Medicine 02",
          "description": "01 Description 02"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "01 Medicine 03",
          "description": "01 Description 03"
        }
      ],
      "name": "Disease 01",
      "description": "Disease 01 Description "
    },
    {
      "medicines": [
        {
          "activeIngredient": "Mosh 3arf",
          "name": "02 Medicine 01",
          "description": "02 Description 01"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "02 Medicine 02",
          "description": "02 Description 02"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "02 Medicine 03",
          "description": "02 Description 03"
        }
      ],
      "name": "Disease 02",
      "description": "Disease 02 Description "
    }
  ],
  "emergancyConstacts": [
    {
      "type": "Father",
      "fullName": " Booking.com",
      "phone": "966545454200"
    },
    {
      "type": "Sona",
      "fullName": " aGODA.com",
      "phone": "966778899500"
    }
  ]
}', CAST(N'2018-08-01T21:53:50.743' AS DateTime), NULL)
GO
INSERT [dbo].[MedicalRecords] ([MedicalRecordId], [Data], [Created], [Updated]) VALUES (2, N'{
  "personalInfo": {
    "fullName": "Ahmed Mohammed Sayed",
    "nationality": "Egyptian",
    "birthDate": "1986-12-12"
  },
  "diseases": [
    {
      "medicines": [
        {
          "activeIngredient": "Mosh 3arf",
          "name": "01 Medicine 01",
          "description": "01 Description 01"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "01 Medicine 02",
          "description": "01 Description 02"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "01 Medicine 03",
          "description": "01 Description 03"
        }
      ],
      "name": "Disease 01",
      "description": "Disease 01 Description "
    },
    {
      "medicines": [
        {
          "activeIngredient": "Mosh 3arf",
          "name": "02 Medicine 01",
          "description": "02 Description 01"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "02 Medicine 02",
          "description": "02 Description 02"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "02 Medicine 03",
          "description": "02 Description 03"
        }
      ],
      "name": "Disease 02",
      "description": "Disease 02 Description "
    }
  ],
  "emergancyConstacts": [
    {
      "type": "Father",
      "fullName": " Booking.com",
      "phone": "966545454200"
    },
    {
      "type": "Sona",
      "fullName": " aGODA.com",
      "phone": "966778899500"
    }
  ]
}', CAST(N'2018-08-01T21:54:24.330' AS DateTime), NULL)
GO
INSERT [dbo].[MedicalRecords] ([MedicalRecordId], [Data], [Created], [Updated]) VALUES (3, N'{
  "personalInfo": {
    "fullName": "Mosaad Ahmed Do",
    "nationality": "Egyptian",
    "birthDate": "1986-12-12"
  },
  "diseases": [
    {
      "medicines": [
        {
          "activeIngredient": "Mosh 3arf",
          "name": "01 Medicine 01",
          "description": "01 Description 01"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "01 Medicine 02",
          "description": "01 Description 02"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "01 Medicine 03",
          "description": "01 Description 03"
        }
      ],
      "name": "Disease 01",
      "description": "Disease 01 Description "
    },
    {
      "medicines": [
        {
          "activeIngredient": "Mosh 3arf",
          "name": "02 Medicine 01",
          "description": "02 Description 01"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "02 Medicine 02",
          "description": "02 Description 02"
        },
        {
          "activeIngredient": "Mosh 3arf",
          "name": "02 Medicine 03",
          "description": "02 Description 03"
        }
      ],
      "name": "Disease 02",
      "description": "Disease 02 Description "
    }
  ],
  "emergancyConstacts": [
    {
      "type": "Father",
      "fullName": " Booking.com",
      "phone": "966545454200"
    },
    {
      "type": "Sona",
      "fullName": " aGODA.com",
      "phone": "966778899500"
    }
  ]
}', CAST(N'2018-08-01T21:54:58.860' AS DateTime), NULL)
GO
SET IDENTITY_INSERT [dbo].[MedicalRecords] OFF
GO
