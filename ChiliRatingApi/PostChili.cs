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
    public static class PostChili
    {
        [FunctionName("PostChili")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            try
            {
                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                var chili = JsonConvert.DeserializeObject<Chili>(requestBody);
                chili.Id = Guid.NewGuid().ToString();

                using (var connection = new SqlConnection(Environment.GetEnvironmentVariable("APPSETTING_SQLConnectionString")))
                {
                    var result = connection.Query<bool>($@"
                       INSERT INTO Chilis (Id, Name, Contestant, Description, ImageUrl)
                       VALUES (@Id, @Name, @Contestant, @Description, @ImageUrl)
                    ", new { chili.Id, chili.Name, chili.Contestant, chili.Description, chili.ImageUrl });

                    return new OkObjectResult(result);
                }
            }
            catch(Exception e)
            {
                log.LogError(e.Message);

                return new BadRequestObjectResult("An Error Occurred. Please Try Again");
            }
        }
    }
}
