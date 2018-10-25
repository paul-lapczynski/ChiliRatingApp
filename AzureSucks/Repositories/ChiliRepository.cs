using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Lib;

namespace AzureSucks.Repositories
{
    public class ChiliRepository : AbstractRepository
    {
        public List<Chili> GetContestants()
        {
            return Connection.Query<Chili>($@"Select * from Chilis").ToList();
        }
    }
}
