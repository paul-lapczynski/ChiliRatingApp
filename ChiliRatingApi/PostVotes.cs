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
using System.Linq;
using Dapper;
using System.Collections.Generic;

namespace ChiliRatingApi
{
    public static class PostVotes
    {
        [FunctionName("PostVotes")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            try
            {
                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                var votes = JsonConvert.DeserializeObject<Vote[]>(requestBody).ToList();

                using (var connection = new SqlConnection(Environment.GetEnvironmentVariable("APPSETTING_SQLConnectionString")))
                {

                    connection.Query($@"delete from Votes where Voter = @voter", new { votes[0].Voter });

                    var results = new List<bool>();

                    votes.ForEach(vote =>
                    {
                        var result = connection.Query<bool>($@"
                       INSERT INTO Votes(Id, Voter, ChiliId)
                       VALUES (@Id, @Voter, @ChiliId)
                    ", new { Id = Guid.NewGuid().ToString(), vote.Voter, vote.ChiliId }).FirstOrDefault();

                        results.Add(result);
                    });

                    return new OkObjectResult(results.All(success => success));
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
