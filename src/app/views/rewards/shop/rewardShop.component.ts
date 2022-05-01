import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { AfterViewInit, Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { Router } from '@angular/router';
import { RewardShopService } from './reward-shop.service';
import { RewardItemView } from './reward-shop.model';

interface REWARD_ITEM {
  REWARD_ITEM_ID: string;
  AMOUNT_LEFT: any;
  REWARD_POINT_NEEDED: any;
  ITEM_NAME: string;
  DESCRIPTION: string;
  REDEMPTION_DEADLINE: any;
  CREATION_DATETIME: Date;
  CREATION_USER: string;
  LAST_UPDATE_DATETIME: Date;
  LAST_UPDATE_USER: string;
};

var REWARD_ITEM_TEST =[
  {
    REWARD_ITEM_ID: "3a", AMOUNT_LEFT: 21, REWARD_POINT_NEEDED: 21, ITEM_NAME: "Chocolate Cookies",
    DESCRIPTION: "Made in Belgium",
    REDEMPTION_DEADLINE: new Date("2022-06-03"), CREATION_DATETIME: new Date("2020-06-01"), CREATION_USER: "Chocorice Pte Ltd", 
    LAST_UPDATE_DATETIME: new Date("2021-07-02"), LAST_UPDATE_USER: "system"
  },
  {
    REWARD_ITEM_ID: "3b", AMOUNT_LEFT: 2, REWARD_POINT_NEEDED: 2, ITEM_NAME: "Tea",
    DESCRIPTION: "Made in China",
    REDEMPTION_DEADLINE: new Date("2022-06-01"), CREATION_DATETIME: new Date("2020-06-01"), CREATION_USER: "China Tea Pte Ltd", 
    LAST_UPDATE_DATETIME: new Date("2021-07-01"), LAST_UPDATE_USER: "system"
  },
  {
    REWARD_ITEM_ID: "3c", AMOUNT_LEFT: 0, REWARD_POINT_NEEDED: 10, ITEM_NAME: "Pancake",
    DESCRIPTION: "Made in China",
    REDEMPTION_DEADLINE: new Date("2022-06-01"), CREATION_DATETIME: new Date("2020-06-01"), CREATION_USER: "Panacke World Pte Ltd", 
    LAST_UPDATE_DATETIME: new Date("2021-02-01"), LAST_UPDATE_USER: "system"
  }
];
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-rewardShop',
  templateUrl: './RewardShop.component.html',
  styleUrls: ['./RewardShop.component.scss']
})

export class RewardShopComponent implements OnInit {

  now: Date = new Date();
  minFromDate!: string;
  minToDate: any;

  balanceAmount: any;

  REWARD_ITEM: any;

  rewardItemView : RewardItemView[];

  constructor(private service :RewardShopService,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.balanceAmount = 54;
    this.service.getAllRewards().subscribe((res) => {
        console.log(res);
        this.REWARD_ITEM = res;
      }
    );

  }
  onRetrieveButtonClick(optionChosen: number): void {
    let UserConfirmationVar = confirm("Are you sure you want to claim the prize: " + this.REWARD_ITEM[optionChosen- 1].itemName);
    if(UserConfirmationVar == true){
      if(this.balanceAmount < this.REWARD_ITEM[optionChosen- 1].rewardPointNeeded){
        alert("Insufficient balance to claim the prize");
      }
      else if(this.REWARD_ITEM[optionChosen - 1].amountLeft > 0){
        this.REWARD_ITEM[optionChosen- 1].amountLeft -= 1;
        this.balanceAmount -= this.REWARD_ITEM[optionChosen- 1].rewardPointNeeded;
        
        alert("you have successfully claimed the prize");
      }
      else {
        alert("Claim failed; Item has no available stock");
      }
      
    } else{

    }
  }
  
}
