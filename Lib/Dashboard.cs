using System;
using System.Collections.Generic;
using System.Text;

namespace Lib
{
    public class Dashboard
    {
        public int TotalVotes { get; set; }

        public ChiliChart ChiliChart { get; set; }

        public List<ChiliCard> FaceOff { get; set; }

        public List<ChiliCard> LadderClimbers { get; set; }

        public bool VotingStarted { get; set; }

        public List<ChiliCard> Contenders { get; set; }
    }
}
