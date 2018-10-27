using AzureSucks.Repositories;
using Lib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AzureSucks.Manager
{
    public class DashboardManager
    {
        #region Repos
        private VotesRepository _voteRepository;
        public VotesRepository VoteRepository
        {
            get
            {
                if (_voteRepository == null)
                {
                    _voteRepository = new VotesRepository();
                }
                return _voteRepository;
            }
            set
            {
                _voteRepository = value;
            }
        }

        private ChiliRepository _chiliRepository;
        public ChiliRepository ChiliRepository
        {
            get
            {
                if (_chiliRepository == null)
                {
                    _chiliRepository = new ChiliRepository();
                }
                return _chiliRepository;
            }
            set
            {
                _chiliRepository = value;
            }
        }
        #endregion

        public Dashboard GetDashboard()
        {
            var dashboard = new Dashboard
            {
                FaceOff = ChiliRepository.GetFaceOffChiliCards(),
                LadderClimbers = ChiliRepository.GetLadderClimbers(),
                TotalVotes = VoteRepository.Get().Count,
                ChiliChart = 
            };

            return dashboard;
        }
    }
}
