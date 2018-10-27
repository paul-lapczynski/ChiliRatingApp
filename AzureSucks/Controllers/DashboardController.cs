using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AzureSucks.Manager;
using AzureSucks.Repositories;
using Lib;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AzureSucks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private DashboardManager _dashboardManager;
        public DashboardManager DashboardManager
        {
            get
            {
                if (_dashboardManager == null)
                {
                    _dashboardManager = new DashboardManager();
                }
                return _dashboardManager;
            }
            set
            {
                _dashboardManager = value;
            }
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var dashboard = DashboardManager.GetDashboard();

            return await Task.FromResult(Ok(dashboard));
        }
    }
}