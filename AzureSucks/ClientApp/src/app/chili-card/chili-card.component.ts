import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chili-card',
  templateUrl: './chili-card.component.html',
  styleUrls: ['./chili-card.component.scss']
})
export class ChiliCardComponent implements OnInit {
  @Input()
  maxWidth = 300;

  @Input()
  chiliCount = [];

  constructor() {}

  ngOnInit() {
    this.getRandomChiliCount();
  }

  getRandomChiliCount() {
    const max = 5;
    const min = 0;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < number; i++) {
      this.chiliCount.push(1);
    }
  }
}
