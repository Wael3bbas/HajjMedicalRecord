using System;
using System.Collections.Generic;
using System.Text;

namespace HMR.Core
{
    public class Incident
    {
        public int IncidentId { get; set; }
        public string ProfileCode { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public DateTime Created { get; set; }
    }
}
