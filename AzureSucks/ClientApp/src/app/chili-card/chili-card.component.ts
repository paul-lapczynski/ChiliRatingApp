import { Component, OnInit, Input } from '@angular/core';
import { ChiliCard } from '../models/ChiliCard';

@Component({
  selector: 'app-chili-card',
  templateUrl: './chili-card.component.html',
  styleUrls: ['./chili-card.component.scss']
})
export class ChiliCardComponent implements OnInit {
  @Input()
  maxWidth = 300;

  @Input()
  chili: ChiliCard;

  @Input()
  isLeader = false;

  @Input()
  hottessCount = 0;

  constructor() {}

  ngOnInit() {
    this.getRandomChiliCount();
  }

  getRandomChiliCount() {}
}
