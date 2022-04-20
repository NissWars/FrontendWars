import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardShopComponent } from './rewardShop.component';

describe('RewardShopComponent', () => {
  let component: RewardShopComponent;
  let fixture: ComponentFixture<RewardShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
