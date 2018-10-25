import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardListComponent } from './leader-board-list.component';

describe('LeaderBoardListComponent', () => {
  let component: LeaderBoardListComponent;
  let fixture: ComponentFixture<LeaderBoardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderBoardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
