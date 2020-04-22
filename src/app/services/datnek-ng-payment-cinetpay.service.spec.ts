import { TestBed } from '@angular/core/testing';

import { DatnekNgPaymentCinetpayService } from './datnek-ng-payment-cinetpay.service';

describe('DatnekNgPaymentCinetpayService', () => {
  let service: DatnekNgPaymentCinetpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatnekNgPaymentCinetpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
