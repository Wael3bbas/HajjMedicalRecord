using HMR.Core;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace HMR.Data
{
    public class DataBase
    {
        public SqlConnection Connection { get; } = new SqlConnection(Constants.ConnectionString);
    }
}
