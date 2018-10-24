import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient) { }

  getSomething() {
    return this.http.get<string[]>('api/SampleData/WeatherForecasts');
  }
}
