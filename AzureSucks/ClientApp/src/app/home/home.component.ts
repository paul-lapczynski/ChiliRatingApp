import { ChiliChart } from './../models/ChiliChart';
import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Dashboard } from '../models/Dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DashboardService]
})
export class HomeComponent {
  names: string[];

  dashboard: Dashboard;

  constructor(private service: DashboardService) {
    this.service.getDashboard().subscribe(dashboard => {
      console.log(dashboard);
      this.dashboard = dashboard;
    });
  }
}
