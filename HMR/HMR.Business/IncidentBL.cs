using HMR.Core;
using HMR.Data;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace HMR.Business
{
    
    public class IncidentBL
    {
        private readonly IncidentDAL _repo;
        public IncidentBL()
        {
            _repo = new IncidentDAL();
        }

        public List<Incident> GetAll()
        {
            return _repo.GetAll();
        }

        public void Create(Incident data)
        {
            _repo.Create(data);
        }
    }
}
