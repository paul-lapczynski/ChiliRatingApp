import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardChartComponent } from './leader-board-chart.component';

describe('LeaderBoardChartComponent', () => {
  let component: LeaderBoardChartComponent;
  let fixture: ComponentFixture<LeaderBoardChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderBoardChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
