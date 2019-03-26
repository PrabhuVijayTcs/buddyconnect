import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrConfirmationComponent } from './pnr-confirmation.component';

describe('PnrConfirmationComponent', () => {
  let component: PnrConfirmationComponent;
  let fixture: ComponentFixture<PnrConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnrConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnrConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
