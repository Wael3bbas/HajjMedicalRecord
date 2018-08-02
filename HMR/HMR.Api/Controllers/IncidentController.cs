using HMR.Business;
using HMR.Core;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace HMR.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncidentController : BaseController
    {
        private readonly IncidentBL _incidentBL;
        public IncidentController()
        {
            _incidentBL = new IncidentBL();
        }

        [HttpGet]
        public ActionResult<List<Incident>> Get()
        {
            return _incidentBL.GetAll();
        }

        [HttpPost]
        public void Create(Incident data)
        {
            _incidentBL.Create(data);
        }
    }
}