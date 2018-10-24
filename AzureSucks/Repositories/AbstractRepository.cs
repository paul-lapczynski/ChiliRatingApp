using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.IdentityModel.Protocols;

namespace AzureSucks.Repositories
{
    public class AbstractRepository
    {
        private IDbConnection _connection;
        protected IDbConnection Connection
        {
            get
            {
                if (_connection == null)
                {
                    var connectionString = Environment.GetEnvironmentVariable("MS_TableConnectionString", EnvironmentVariableTarget.Machine);

                    if (connectionString == null)
                    {
                        connectionString = Environment.GetEnvironmentVariable("SQLAZURECONNSTR_MS_TableConnectionString");
                    }

                    return _connection = new SqlConnection(connectionString);
                }
                else
                {
                    return _connection;
                }
            }
        }

        public AbstractRepository()
        {
        }
    }
}
