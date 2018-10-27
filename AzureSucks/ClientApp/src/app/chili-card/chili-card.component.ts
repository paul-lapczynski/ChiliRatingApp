import { Component, OnInit, Input } from '@angular/core';
import { ChiliCard } from '../models/ChiliCard';

@Component({
  selector: 'app-chili-card',
  templateUrl: './chili-card.component.html',
  styleUrls: ['./chili-card.component.scss']
})
export class ChiliCardComponent implements OnInit {
  @Input()
  width = 300;

  @Input()
  chili: ChiliCard;

  @Input()
  isLeader = false;

  get hottessCount() {
    return Math.floor(this.chili.votes / 5);
  }

  constructor() {}

  ngOnInit() {
    this.getRandomChiliCount();
  }

  getRandomChiliCount() {}
}
