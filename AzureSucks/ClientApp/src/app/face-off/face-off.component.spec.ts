import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceOffComponent } from './face-off.component';

describe('FaceOffComponent', () => {
  let component: FaceOffComponent;
  let fixture: ComponentFixture<FaceOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
