using HMR.Core;
using HMR.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace HMR.Business
{
    public class MedicalRecordBL
    {
        private readonly MedicalRecordDAL _repo;
        public MedicalRecordBL()
        {
            _repo = new MedicalRecordDAL();
        }

        public ProfileData Get(int hajjId)
        {
            return _repo.Get(hajjId);
        }

        public void Create(ProfileData data)
        {
            _repo.Create(data);
        }

        public void AddCase(int hajjId, MedicalCase caseData)
        {
            var hajjData = Get(hajjId);
            if (hajjData.Cases == null)
                hajjData.Cases = new List<MedicalCase>();

            hajjData.Cases.Add(caseData);

            _repo.AddCase(caseData);
        }
    }
}
