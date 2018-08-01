using HMR.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace HMR.Data
{
    public class MedicalRecordDAL
    {
        public ProfileData Get(int hajjId)
        {
            return new ProfileData
            {
                PersonalInfo = new PersonalInfo
                {
                    FullName = "Kareem Uber Airbnb",
                    BirthDate = DateTime.Parse("12/12/1976"),
                    Nationality = "British"
                },
                Diseases = new List<Disease>
                {
                    new Disease
                    {
                        Name ="Disease 01",
                        Description ="Disease 01 Description ",
                        Medicines = new List<Medicine>
                        {
                            new Medicine{ Name ="01 Medicine 01", Description ="01 Description 01", ActiveIngredient ="Mosh 3arf" },
                            new Medicine{ Name ="01 Medicine 02", Description ="01 Description 02", ActiveIngredient ="Mosh 3arf" },
                            new Medicine{ Name ="01 Medicine 03", Description ="01 Description 03", ActiveIngredient ="Mosh 3arf" }
                        }
                    },
                    new Disease
                    {
                        Name ="Disease 02",
                        Description ="Disease 02 Description ",
                        Medicines = new List<Medicine>
                        {
                            new Medicine{ Name ="02 Medicine 01", Description ="02 Description 01", ActiveIngredient ="Mosh 3arf" },
                            new Medicine{ Name ="02 Medicine 02", Description ="02 Description 02", ActiveIngredient ="Mosh 3arf" },
                            new Medicine{ Name ="02 Medicine 03", Description ="02 Description 03", ActiveIngredient ="Mosh 3arf" }
                        }
                    }
                },
                EmergancyConstacts = new List<Contact>
                 {
                     new Contact{ FullName =" Booking.com", Phone ="966545454200", Type ="Father"},
                     new Contact{ FullName =" aGODA.com", Phone ="966778899500", Type ="Sona"}
                 }
            };
        }
    }
}
