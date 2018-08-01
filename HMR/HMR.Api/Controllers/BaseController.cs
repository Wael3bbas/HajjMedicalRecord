using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HMR.Api.Controllers
{
    public abstract class BaseController : ControllerBase
    {
        public MyOkResult<T> MyOk<T>(T data)
        {
            return new MyOkResult<T>(data);
        }
    }
}