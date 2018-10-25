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
  chiliCount = [1, 2, 3, 5];
  constructor() {}

  ngOnInit() {}
}
