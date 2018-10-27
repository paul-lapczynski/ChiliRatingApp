import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leader-board-list',
  templateUrl: './leader-board-list.component.html',
  styleUrls: ['./leader-board-list.component.scss']
})
export class LeaderBoardListComponent implements OnInit {
  @Input()
  chiliCards = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit() {}
}
