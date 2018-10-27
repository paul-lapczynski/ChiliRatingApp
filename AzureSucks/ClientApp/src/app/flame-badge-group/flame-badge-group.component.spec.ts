import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlameBadgeGroupComponent } from './flame-badge-group.component';

describe('FlameBadgeGroupComponent', () => {
  let component: FlameBadgeGroupComponent;
  let fixture: ComponentFixture<FlameBadgeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlameBadgeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlameBadgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
