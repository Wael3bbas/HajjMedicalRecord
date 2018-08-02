using HMR.Business;
using HMR.Core;
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
            return Ok(data);
        }

        [HttpPost]
        public void Create(ProfileData data)
        {
            _medicalRecordBL.Create(data);
        }
    }
}