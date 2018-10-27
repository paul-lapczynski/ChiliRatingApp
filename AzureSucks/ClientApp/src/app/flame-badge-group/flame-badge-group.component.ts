import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-flame-badge-group',
  templateUrl: './flame-badge-group.component.html',
  styleUrls: ['./flame-badge-group.component.scss']
})
export class FlameBadgeGroupComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  count: number;

  countList: number[] = [];

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.count && changes.count.currentValue) {
      const countList = [];
      for (let i = 0; i < this.count; i++) {
        countList.push(1);
      }

      this.countList = countList;
    }
  }

  ngOnDestroy() {}
}
