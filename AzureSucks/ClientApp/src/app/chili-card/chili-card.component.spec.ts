import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiliCardComponent } from './chili-card.component';

describe('ChiliCardComponent', () => {
  let component: ChiliCardComponent;
  let fixture: ComponentFixture<ChiliCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiliCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiliCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
