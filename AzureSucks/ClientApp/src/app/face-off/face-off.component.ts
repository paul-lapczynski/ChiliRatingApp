import { Component, OnInit, Input } from '@angular/core';
import { ChiliCard } from '../models/ChiliCard';

@Component({
  selector: 'app-face-off',
  templateUrl: './face-off.component.html',
  styleUrls: ['./face-off.component.scss']
})
export class FaceOffComponent implements OnInit {
  @Input()
  topTwo: ChiliCard[];

  constructor() {}

  ngOnInit() {}
}
