import { Component } from '@angular/core';
import { TestingService } from '../testing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [TestingService]
})
export class HomeComponent {
  names: string[];
  constructor(private service: TestingService) {
    this.service.getSomething().subscribe(item => {
      this.names = item;
    });
  }
}
