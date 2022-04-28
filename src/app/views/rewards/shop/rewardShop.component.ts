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
/*
interface rewardItemInterface {
  name: string;
  cost: any;
  image: typeof Image;
  stockLeft: any;
};
// Test images. Pls remove these imgArray and delete images folder when db-connected
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = './images/sampleImg1.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'images/sampleImg2.jpg';

function getRewards(): Promise<REWARD_ITEM[]> {
  return fetch('/rewardShop/all')
          // the JSON body is taken from the response
          .then(res => res.json())
          .then(res => {
                  // The response has an `any` type, so we need to cast
                  // it to the `User` type, and return it from the promise
                  return res as REWARD_ITEM[]
          })
}

var rewardItemsTest = [
  {name: "Chocolate Cookies", cost: 12, image: imgArray[0], stockLeft: 2},
  {name: "Strawberry Cake", cost: 25, image: imgArray[1], stockLeft: 1},
  {name: "Durian Ice-cream", cost: 2, image: imgArray[1], stockLeft: 0}
];*/
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
  //participants3: any;
  //cost3: any;
  balanceAmount: any;
  //rewardItems: rewardItemInterface[] = rewardItemsTest;
  REWARD_ITEM: REWARD_ITEM[] = REWARD_ITEM_TEST;

  rewardItemView : RewardItemView[];

  constructor(private service :RewardShopService,
    private router: Router) { 
  }

  ngOnInit(): void {

    this.minFromDate = this.dateFunc(this.now);
    //this.now.setDate(this.now.getDate()+1);
    //this.minToDate = this.dateFunc(this.now);
    //this.participants3 = 2;
    //this.cost3 = 0;
    this.balanceAmount = 54;
    /*
    var databaseQueryRewards = this.service.getAllRewards().subscribe(resp => {
      console.log('success');
    });;*/
    var databaseQueryRewards =  this.service.getAllRewards().subscribe(
      (res:any) => {
        
        this.rewardItemView = res["data"];
        
      },
    );
    this.REWARD_ITEM[0].ITEM_NAME = databaseQueryRewards[0].ITEM_NAME;
  }
  onRetrieveButtonClick(optionChosen: number): void {
    //this.cost3 = 87;
    let UserConfirmationVar = confirm("Are you sure you want to claim the prize: " + REWARD_ITEM_TEST[optionChosen- 1].ITEM_NAME);
    if(UserConfirmationVar == true){
      //this.cost3 = optionChosen;
      if(this.balanceAmount < REWARD_ITEM_TEST[optionChosen- 1].REWARD_POINT_NEEDED){
        alert("Insufficient balance to claim the prize");
      }
      else if(REWARD_ITEM_TEST[optionChosen - 1].AMOUNT_LEFT > 0){
        REWARD_ITEM_TEST[optionChosen- 1].AMOUNT_LEFT -= 1;
        this.balanceAmount -= REWARD_ITEM_TEST[optionChosen- 1].REWARD_POINT_NEEDED;
        alert("you have successfully claimed the prize");
      }
      else {
        alert("Claim failed; Item has no available stock");
      }
      
    } else{
      //this.cost3 = 16;
      //var RewardList = getRewards();
      //this.cost3 = RewardList[0].REWARD_POINT_NEEDED;
    }
  }
  dateFunc(today:Date): string{
    var dd:string = today.getDate().toString();
    var mm:string = (today.getMonth()+1).toString();
    var yyyy = today.getFullYear();
    if(today.getDate()<10){
      dd='0'+dd;
    }
    if(today.getMonth()+1<10){
      mm='0'+mm
    }
    return yyyy+'-'+mm+'-'+dd;
  }
}
