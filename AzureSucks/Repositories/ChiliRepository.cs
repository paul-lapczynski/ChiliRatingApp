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
        public List<Chili> GetChilis()
        {
            return Connection.Query<Chili>($@"Select * from Chilis").ToList();
        }

        public List<ChiliCard> GetFaceOffChiliCards()
        {
            return Connection.Query<ChiliCard>($@"
                with CTE as (select top 2 ChiliId, Count(*) as Votes from Votes group by ChiliId order by Votes Desc)
                select c.Name As Title, c.Contestant As Subtitle, c.Description, c.ImageUrl, CTE.Votes
                    from Chilis c
                    join CTE on c.id = CTE.ChiliId
            ").ToList();
        }

        public List<ChiliCard> GetLadderClimbers()
        {
            return Connection.Query<ChiliCard>($@"
                with CTE as (select top 7 ChiliId, Count(*) as Votes from Votes group by ChiliId order by Votes Desc)
                select c.Name As Title, c.Contestant As Subtitle, c.Description, c.ImageUrl, CTE.Votes
                from Chilis c
                join CTE on c.id = CTE.ChiliId
                order by Votes desc
                OFFSET 2 ROWS FETCH NEXT 5 ROWS ONLY
            ").ToList();
        }

        public List<ChartColumn> GetChiliChartColumns()
        {
            return Connection.Query<ChartColumn>($@"
                with CTE as (select ChiliId, Count(*) as Votes from Votes group by ChiliId)
                select Contestant as Name, ct.Votes as Value from Chilis c
                    join CTE ct on c.Id = ct.ChiliId
                order by Name
            ").ToList();
        }
    }
}
