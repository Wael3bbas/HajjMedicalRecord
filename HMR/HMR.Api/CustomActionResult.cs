using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Microsoft.AspNetCore.Mvc
{
    public class MyOkResult<T> : OkObjectResult
    {
        public MyOkResult(T value) : base(new ApiResponse<T>(value))
        {

        }
    }

    public class ApiResponse<T>
    {
        public ApiResponse(T data)
        {
            Data = data;
            IsOk = true;
        }
        public T Data { get; set; }
        public bool IsOk { get; set; } = true;
    }
}