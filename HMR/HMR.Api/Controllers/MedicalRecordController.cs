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
    public class MedicalRecordController : BaseController
    {
        private readonly MedicalRecordBL _medicalRecordBL;
        public MedicalRecordController()
        {
            _medicalRecordBL = new MedicalRecordBL();
        }

        [HttpGet("{id}")]
        public ActionResult<ProfileData> Get(int id)
        {
            var data =  _medicalRecordBL.Get(id);
            return MyOk(data);
        }
    }
}