import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { AfterViewInit, Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';

interface rewardItemInterface {
  name: string;
  cost: any;
  image: typeof Image;
  stockLeft: any;
};
// Test images. Pls remove these imgArray and delete images folder when db-connected
var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'images/sampleImg1.jpg';
imgArray[1] = new Image();
imgArray[1].src = 'images/sampleImg2.jpg';

var rewardItemsTest = [
  {name: "15% off", cost: 12.3, image: imgArray[0], stockLeft: 2}
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
  participants3: any;
  cost3: any;
  balanceAmount: any;
  rewardItems: rewardItemInterface[] = rewardItemsTest;

  constructor() { 
  }
  ngOnInit(): void {

    this.minFromDate = this.dateFunc(this.now);
    //this.now.setDate(this.now.getDate()+1);
    this.minToDate = this.dateFunc(this.now);
    this.participants3 = 2;
    this.cost3 = 0;
    this.balanceAmount = 54.2;
    
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
