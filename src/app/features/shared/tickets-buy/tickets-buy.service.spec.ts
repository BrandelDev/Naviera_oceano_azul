import { TestBed } from '@angular/core/testing';

import { TicketsBuyService } from './tickets-buy.service';

describe('TicketsBuyService', () => {
  let service: TicketsBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
