using System;

namespace HMR.Core
{
    public class PersonalInfo
    {
        public string FullName { get; set; }
        public string Nationality { get; set; }
        public string PasportNumber { get; set; }
        public string Gender { get; set; }
        public int Age => CalculateAge();
        public DateTime BirthDate { get; set; }
        public string BloodType { get; set; }
        public string Address { get; set; }

        private int CalculateAge()
        {
            int age = 0;
            age = DateTime.Now.Year - BirthDate.Year;
            if (DateTime.Now.DayOfYear < BirthDate.DayOfYear)
                age = age - 1;

            return age;
        }
    }
}