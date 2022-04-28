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
  feedback1?: any;
  cost2?: any;
  participants2?: any;
  name2?: any;
  feedback2?: any;
  cost3?: any;
  participants3?: any;
  name3?: any;
  feedback3?: any;
}
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent implements OnInit {
  faStar = faStar;
  now: Date = new Date();
  cardValues: cardValues = {};
  cardStyle: string ="width: 250px;height: 330px;";
  ranButStyle: string = "width: 200px;height: 40px;text-align:center;line-height:1em;background-color: lightseagreen;outline: none !important;border: none;"
  randomTriggered: boolean = false;
  navigator: number=0;
  eventList: any;
  rating: any;

  constructor(private randomizerService: RandomizerService, private router: Router) { 
  }
  ngOnInit(): void {
    this.randomTriggered=false;
    if(sessionStorage.getItem('randomize')!="1"){
      this.randomizerService.sendGetAllTags("1").subscribe(
        (data: any)=>{console.log(data);this.eventList=data;}) 
    }
  }

  onRandomize(){
    if(sessionStorage.getItem('randomize')){
      alert('Event already chosen');
    }else{
      this.randomizeFunctionality();
    }
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
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost2=this.eventList[this.navigator].price;
      this.cardValues.participants2=this.eventList[this.navigator].maximumPax;
      this.cardValues.name2=this.eventList[this.navigator].eventName;
      this.cardValues.feedback2=Number(this.eventList[this.navigator].rating);
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost3=this.eventList[this.navigator].price;
      this.cardValues.participants3=this.eventList[this.navigator].maximumPax;
      this.cardValues.name3=this.eventList[this.navigator].eventName;
      this.cardValues.feedback3=Number(this.eventList[this.navigator].rating);
      this.navigator++;
    }
  }
  randomizeFunctionality(){
    console.log(this.eventList);
    if(this.navigator<this.eventList.length){
      this.cardValues.cost1=(this.eventList[this.navigator].price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      this.cardValues.participants1=this.eventList[this.navigator].maximumPax;
      this.cardValues.name1=this.eventList[this.navigator].eventName;
      this.cardValues.feedback1=this.eventList[this.navigator].rating;
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost2=(this.eventList[this.navigator].price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      this.cardValues.participants2=this.eventList[this.navigator].maximumPax;
      this.cardValues.name2=this.eventList[this.navigator].eventName;
      this.cardValues.feedback2=this.eventList[this.navigator].rating;
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost3=(this.eventList[this.navigator].price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      this.cardValues.participants3=this.eventList[this.navigator].maximumPax;
      this.cardValues.name3=this.eventList[this.navigator].eventName;
      this.cardValues.feedback3=this.eventList[this.navigator].rating;
      this.navigator++;
    }
    this.randomTriggered=true;
    this.cardStyle = this.cardStyle + "opacity: 0.2;";
    this.ranButStyle = this.ranButStyle + "visibility: hidden;display: none";
  }
  cardClick(num: Number){
    switch(num){
      case 1: console.log(1);sessionStorage.setItem('randomize','1');break;
      case 2: console.log(2);sessionStorage.setItem('randomize','2');break;
      case 3: console.log(3);sessionStorage.setItem('randomize','3');break;
      default: break;
    }
  }
}
