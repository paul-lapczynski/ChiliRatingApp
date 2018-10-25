import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leader-board-chart',
  templateUrl: './leader-board-chart.component.html',
  styleUrls: ['./leader-board-chart.component.scss']
})
export class LeaderBoardChartComponent implements OnInit {
  view: any[] = [700, 400];
  single = [
    {
      name: 'Phil',
      value: 1
    },
    {
      name: 'Gen',
      value: 4
    },
    {
      name: 'Michael Merman',
      value: 6
    }
  ];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Chilers';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = 'fire';

  ngOnInit() {}

  testing() {
    this.single[0].value = Math.random() * 12;

    this.single = [...this.single];
  }
}
