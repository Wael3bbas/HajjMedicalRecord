using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HMR.Business;
using HMR.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HMR.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicalRecordController : ControllerBase
    {
        private readonly MedicalRecordBL _medicalRecordBL;
        public MedicalRecordController()
        {
            _medicalRecordBL = new MedicalRecordBL();
        }

        public ProfileData Get(int hajjId)
        {
            return _medicalRecordBL.Get(hajjId);
        }
    }
}