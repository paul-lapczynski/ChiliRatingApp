import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlameBadgeComponent } from './flame-badge.component';

describe('FlameBadgeComponent', () => {
  let component: FlameBadgeComponent;
  let fixture: ComponentFixture<FlameBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlameBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlameBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
