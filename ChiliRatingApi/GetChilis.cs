
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System;
using Dapper;
using Lib;
using System.Linq;

namespace ChiliRatingApi
{
    public static class GetChilis
    {
        [FunctionName("GetChilis")]
        public static IActionResult Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = null)]HttpRequest req, TraceWriter log)
        {
            using (var connection = new SqlConnection(Environment.GetEnvironmentVariable("APPSETTING_SQLConnectionString")))
            {
                var contestents = connection.Query<Chili>($@"SELECT * FROM Chilis").ToList();

                return new OkObjectResult(contestents);
            }
        }
    }
}
