using Newtonsoft.Json;
using System;

namespace HMR.Core
{
    public class MedicalCase
    {
        public DateTime CreatedAt { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string MedicalProcedures { get; set; }
    }
}