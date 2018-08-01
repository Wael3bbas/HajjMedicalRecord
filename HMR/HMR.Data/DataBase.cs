using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace HMR.Data
{
    public class DataBase
    {
        public static string ConnectionString { get; } = "Server=.;Database=HMRDB;User Id=sa;Password=P@ssw0rd;";
        //public static string ConnectionString { get; } = "Server=.\\SQLEXPRESS2016;Database=HMRDB;User Id=sa;Password=P@ssw0rd;";
        public SqlConnection Connection { get; } = new SqlConnection(ConnectionString);
    }
}
