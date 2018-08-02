using System;

namespace HMR.Core
{
    public class MedicalCaseCreateInput : MedicalCase
    {
        public int HajjId { get; set; }

        public MedicalCase ToCase()
        {
            return new MedicalCase
            {
                Description = this.Description,
                MedicalProcedures = this.MedicalProcedures,
                Type = this.Type,
                CreatedAt = DateTime.Now
            };
        }
    }
}
