using Dapper;
using HMR.Core;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace HMR.Data
{
    public class IncidentDAL : DataBase
    {
        public List<Incident> GetAll()
        {
            var sql = @"SELECT * FROM [dbo].[Incidents]";

            using (Connection)
            {
                return Connection.Query<Incident>(sql)?.ToList(); ;
            }
        }

        public void Create(Incident data)
        {
            using (Connection)
            {
                var sql =
                    @"INSERT INTO [dbo].[Incidents]
                        ([ProfileCode], [Description], [Location], [Created])
                    VALUES 
                        (@ProfileCode, @Description, @Location, @Created)";

                Connection.Execute(sql,
                    new
                    {
                        ProfileCode = data.ProfileCode,
                        Description = data.Description,
                        Location = data.Location,
                        Created = data.Created
                    });
            }
        }
    }
}
