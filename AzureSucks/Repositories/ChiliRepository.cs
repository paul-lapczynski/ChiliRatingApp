using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace AzureSucks.Repositories
{
    public class ChiliRepository : AbstractRepository
    {
        public List<Contestants> GetContestants()
        {
            return Connection.Query<Contestants>($@"Select * from Contestants").ToList();
        }
    }

    public class Contestants
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
