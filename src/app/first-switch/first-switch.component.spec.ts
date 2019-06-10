import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSwitchComponent } from './first-switch.component';

describe('FirstSwitchComponent', () => {
  let component: FirstSwitchComponent;
  let fixture: ComponentFixture<FirstSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
