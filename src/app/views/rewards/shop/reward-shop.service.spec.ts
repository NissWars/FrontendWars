import { TestBed } from '@angular/core/testing';

import { RewardShopService } from './reward-shop.service';

describe('RewardShopService', () => {
  let service: RewardShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewardShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
