import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsBuyComponent } from './tickets-buy.component';

describe('TicketsBuyComponent', () => {
  let component: TicketsBuyComponent;
  let fixture: ComponentFixture<TicketsBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsBuyComponent]
    });
    fixture = TestBed.createComponent(TicketsBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
