import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { AfterViewInit, Component, OnInit,ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { RandomizerService} from './randomizer.service'
import { cilStar } from '@coreui/icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

interface cardValues{
  cost1?: any;
  participants1?: any;
  name1?: any;
  eventId1?: any;
  feedback1?: any;
  cost2?: any;
  participants2?: any;
  name2?: any;
  eventId2?: any;
  feedback2?: any;
  cost3?: any;
  participants3?: any;
  name3?: any;
  feedback3?: any;
  eventId3?: any;
}
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent implements OnInit,AfterViewInit {
  faStar = faStar;
  now: Date = new Date();
  cardValues: cardValues = {};
  cardStyle: string ="width: 250px;height: 330px;";
  ranButStyle: string = "width: 200px;height: 40px;text-align:center;line-height:1em;background-color: lightseagreen;outline: none !important;border: none;"
  randomTriggered: boolean = false;
  navigator: number=0;
  eventList: any;
  rating: any;
  custId: any;

  constructor(private randomizerService: RandomizerService, private router: Router) { 
  }
  ngOnInit(): void {
    this.randomTriggered=false;
    this.custId=sessionStorage.getItem('custID');
    this.randomizerService.sendGetAllTags(this.custId).subscribe(
        (data: any)=>{console.log(data);this.eventList=data;}) ;
  }
  ngAfterViewInit(): void {
    this.randomizerService.getPendingEvent(this.custId).subscribe(
      (data:any)=>{
        console.log(data);
         if(!data.allowRandomizing)
         {
           alert("There is a Pending Event Completion");
           this.router.navigateByUrl("/event/detail?eventID="+data.eventId);
         }
      });
  }
  onRandomize(){
    this.randomizeFunctionality();
  }
  onRefresh(){
    if(this.navigator>=this.eventList.length)
    {
      alert("Refresh Limit Reached");
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost1=this.eventList[this.navigator].price;
      this.cardValues.participants1=this.eventList[this.navigator].maximumPax;
      this.cardValues.name1=this.eventList[this.navigator].eventName;
      this.cardValues.feedback1=Number(this.eventList[this.navigator].rating);
      this.cardValues.eventId1=this.eventList[this.navigator].eventID;
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost2=this.eventList[this.navigator].price;
      this.cardValues.participants2=this.eventList[this.navigator].maximumPax;
      this.cardValues.name2=this.eventList[this.navigator].eventName;
      this.cardValues.feedback2=Number(this.eventList[this.navigator].rating);
      this.cardValues.eventId2=this.eventList[this.navigator].eventID;
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost3=this.eventList[this.navigator].price;
      this.cardValues.participants3=this.eventList[this.navigator].maximumPax;
      this.cardValues.name3=this.eventList[this.navigator].eventName;
      this.cardValues.feedback3=Number(this.eventList[this.navigator].rating);
      this.cardValues.eventId3=this.eventList[this.navigator].eventID;
      this.navigator++;
    }
  }
  randomizeFunctionality(){
    console.log(this.eventList);
    if(this.navigator<this.eventList.length){
      this.cardValues.cost1=this.eventList[this.navigator].price;
      this.cardValues.participants1=this.eventList[this.navigator].maximumPax;
      this.cardValues.name1=this.eventList[this.navigator].eventName;
      this.cardValues.feedback1=Number(this.eventList[this.navigator].rating);
      this.cardValues.eventId1=this.eventList[this.navigator].eventID;
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost2=this.eventList[this.navigator].price;
      this.cardValues.participants2=this.eventList[this.navigator].maximumPax;
      this.cardValues.name2=this.eventList[this.navigator].eventName;
      this.cardValues.feedback2=Number(this.eventList[this.navigator].rating);
      this.cardValues.eventId2=this.eventList[this.navigator].eventID;
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost3=this.eventList[this.navigator].price;
      this.cardValues.participants3=this.eventList[this.navigator].maximumPax;
      this.cardValues.name3=this.eventList[this.navigator].eventName;
      this.cardValues.feedback3=Number(this.eventList[this.navigator].rating);
      this.cardValues.eventId3=this.eventList[this.navigator].eventID;
      this.navigator++;
    }
    this.randomTriggered=true;
    this.cardStyle = this.cardStyle + "opacity: 0.2;";
    this.ranButStyle = this.ranButStyle + "visibility: hidden;display: none";
  }
  cardClick(num: Number){
    console.log(this.custId);
    sessionStorage.setItem('custId',this.custId);
    console.log(sessionStorage.getItem('custId'));
    switch(num){
      case 1: this.router.navigateByUrl("/event/detail?eventID="+this.cardValues.eventId1);break;
      case 2: this.router.navigateByUrl("/event/detail?eventID="+this.cardValues.eventId2);;break;
      case 3: this.router.navigateByUrl("/event/detail?eventID="+this.cardValues.eventId3);;break;
      default: break;
    }
  }
}
