import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstEventComponent } from './first-event.component';

describe('FirstEventComponent', () => {
  let component: FirstEventComponent;
  let fixture: ComponentFixture<FirstEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
