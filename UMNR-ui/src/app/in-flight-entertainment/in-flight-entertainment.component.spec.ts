import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFlightEntertainmentComponent } from './in-flight-entertainment.component';

describe('InFlightEntertainmentComponent', () => {
  let component: InFlightEntertainmentComponent;
  let fixture: ComponentFixture<InFlightEntertainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFlightEntertainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFlightEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
