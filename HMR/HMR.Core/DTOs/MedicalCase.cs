using System;

namespace HMR.Core
{
    public class MedicalCaseCreateInput : MedicalCase
    {
        public int HajjId { get; set; }

        public MedicalCase To => (MedicalCase)this;
    }
}