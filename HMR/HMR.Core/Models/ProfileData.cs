using System;
using System.Collections.Generic;
using System.Text;

namespace HMR.Core
{
    public class ProfileData
    {
        public PersonalInfo PersonalInfo { get; set; }
        public List<Disease> Diseases { get; set; }
        public List<Contact> EmergancyContacts { get; set; }
        public List<MedicalCase> Cases { get; set; }
    }
}
