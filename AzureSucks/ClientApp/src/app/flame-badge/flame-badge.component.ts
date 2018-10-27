import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flame-badge',
  templateUrl: './flame-badge.component.html',
  styleUrls: ['./flame-badge.component.scss']
})
export class FlameBadgeComponent implements OnInit {
  @Input()
  showFlame = false;

  constructor() {}

  ngOnInit() {}
}
