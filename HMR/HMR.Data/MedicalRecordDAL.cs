using Dapper;
using HMR.Core;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace HMR.Data
{
    public class MedicalRecordDAL : DataBase
    {
        public ProfileData Get(string profileCode)
        {
            var sql = @"SELECT  [Data]
                      FROM [dbo].[MedicalRecords]
                      WHERE [ProfileCode]= @ProfileCode";

            using (Connection)
            {
                var data = Connection.QueryFirstOrDefault<string>(sql, new { ProfileCode = profileCode });
                if (data != null)
                    return JsonConvert.DeserializeObject<ProfileData>(data);

            }
            return null;
        }

        public void Create(string profileCode, ProfileData data)
        {
            var dataSerialized = JsonConvert.SerializeObject(data);
            using (Connection)
            {
                var sql = 
                    @"INSERT INTO [MedicalRecords] 
                        (ProfileCode, Data, Created) 
                    VALUES 
                        (@ProfileCode, @Data, @Created)";

                Connection.Execute(sql,
                    new
                    {
                        ProfileCode = profileCode,
                        Data = dataSerialized,
                        Created = DateTime.Now
                    });
            }
        }

        public void Update(string profileCode, ProfileData data)
        {
            var dataSerialized = JsonConvert.SerializeObject(data);
            using (var connection = new SqlConnection(Constants.ConnectionString))
            {
                var sql =
                    @"Update [MedicalRecords] 
                        SET Data = @Data, Updated = @Updated
                        WHERE ProfileCode = @ProfileCode";
                connection.Execute(sql,
                    new
                    {
                        Data = dataSerialized,
                        Updated = DateTime.Now,
                        ProfileCode = profileCode
                    });
            }
        }
    }
}
