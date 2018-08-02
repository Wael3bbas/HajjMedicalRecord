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
        public ProfileData Get(int hajjId)
        {
            var sql = @"SELECT  [Data]
                      FROM [dbo].[MedicalRecords]
                      WHERE [MedicalRecordId] = @MedicalRecordId";

            using (Connection)
            {
                var data = Connection.QueryFirstOrDefault<string>(sql, new { MedicalRecordId = hajjId });
                if (data != null)
                    return JsonConvert.DeserializeObject<ProfileData>(data);

            }
            return null;
        }

        public void Create(ProfileData data)
        {
            var dataSerialized = JsonConvert.SerializeObject(data);
            using (Connection)
            {
                const string sql = @"INSERT INTO [MedicalRecords] (Data, Created) VALUES (@Data, @Created)";
                Connection.Execute(sql,
                    new
                    {
                        Data = dataSerialized,
                        Created = DateTime.Now
                    });
            }
        }

        public void Update(int hajjId, ProfileData data)
        {
            var dataSerialized = JsonConvert.SerializeObject(data);
            using (var connection = new SqlConnection(Constants.ConnectionString))
            {
                var sql = 
                    @"Update [MedicalRecords] 
                        SET Data = @Data, Updated = @Updated
                        WHERE MedicalRecordId = @MedicalRecordId";
                connection.Execute(sql,
                    new
                    {
                        Data = dataSerialized,
                        Updated = DateTime.Now,
                        MedicalRecordId = hajjId
                    });
            }
        }
    }
}
