import { Dashboard } from './../models/Dashboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboard() {
    return this.http
      .get<Dashboard>('api/Dashboard')
      .pipe(map(item => new Dashboard(item)));
  }
}
