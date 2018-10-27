import { ChiliChart } from './../models/ChiliChart';
import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Dashboard } from '../models/Dashboard';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DashboardService]
})
export class HomeComponent {
  names: string[];

  dashboard: Dashboard;

  constructor(private service: DashboardService) {
    interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.service.getDashboard())
      )
      .subscribe(dashboard => {
        console.log(dashboard);
        this.dashboard = dashboard;
      });
  }
}
