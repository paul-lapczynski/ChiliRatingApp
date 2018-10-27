import {
  Component,
  OnInit,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { BarVerticalComponent } from '@swimlane/ngx-charts';
import { ChiliChart } from '../models/ChiliChart';

@Component({
  selector: 'app-leader-board-chart',
  templateUrl: './leader-board-chart.component.html',
  styleUrls: ['./leader-board-chart.component.scss']
})
export class LeaderBoardChartComponent implements OnInit, OnChanges {
  view: any[] = [700, 400];

  @ViewChild('chart', { read: BarVerticalComponent })
  chart: BarVerticalComponent;

  @Input()
  chiliChart: ChiliChart;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Chilers';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'fire';

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.single && this.chart) {
      this.chart.update();
    }
  }
}
