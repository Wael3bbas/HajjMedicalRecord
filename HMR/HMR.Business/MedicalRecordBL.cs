using HMR.Core;
using HMR.Data;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
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

        public ProfileData Get(string profileCode)
        {
            return _repo.Get(profileCode);
        }

        public void Create(ProfileData data)
        {
            var profileCode = GenerateCode().ToString();
            _repo.Create(profileCode, data);
        }
        private uint GenerateCode()
        {
            using (RNGCryptoServiceProvider rg = new RNGCryptoServiceProvider())
            {
                byte[] rno = new byte[8];
                rg.GetBytes(rno);
                return BitConverter.ToUInt32(rno, 0);
            }
        }

        public void AddCase(string profileCode, MedicalCase caseData)
        {
            var hajjData = Get(profileCode);
            if (hajjData.Cases == null)
                hajjData.Cases = new List<MedicalCase>();

            hajjData.Cases.Add(caseData);

            _repo.Update(profileCode, hajjData);
        }
    }
}
