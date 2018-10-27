using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Lib;
using System.Data.SqlClient;
using Dapper;

namespace ChiliRatingApi
{
    public static class DeleteChili
    {
        [FunctionName("DeleteChili")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic chili = JsonConvert.DeserializeObject(requestBody);

            try
            {
                using (var connection = new SqlConnection(Environment.GetEnvironmentVariable("APPSETTING_SQLConnectionString")))
                {
                    connection.Query($@"delete from Votes where ChiliId = @ChiliId", new { chili.ChiliId });
                    connection.Query($@"delete from Chilis where Id = @ChiliId", new { chili.ChiliId });

                    return new OkObjectResult(true);
                }
            }

            catch (Exception e)
            {
                log.LogError(e.Message);

                return new BadRequestObjectResult("An Error Occurred. Please Try Again");

            }
        }
    }
}
