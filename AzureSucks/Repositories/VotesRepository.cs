using Dapper;
using Lib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AzureSucks.Repositories
{
    public class VotesRepository : AbstractRepository
    {
        public List<Vote> Get(string chiliId)
        {
            var result = Connection.Query<Vote>($@"SELECT * FROM Votes WHERE ChiliId = @chiliId", new { chiliId }).ToList();

            return result;
        }

        public List<Vote> Get()
        {
            var result = Connection.Query<Vote>($@"SELECT * FROM Votes").ToList();

            return result;
        }
    }
}
