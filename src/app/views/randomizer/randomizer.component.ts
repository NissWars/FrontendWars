import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { AfterViewInit, Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { RandomizerService} from './randomizer.service'

interface cardValues{
  cost1?: any;
  participants1?: any;
  name1?: any;
  cost2?: any;
  participants2?: any;
  name2?: any;
  cost3?: any;
  participants3?: any;
  name3?: any;
}
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent implements OnInit {

  now: Date = new Date();
  minFromDate!: string;
  minToDate: any;
  cardValues: cardValues = {};
  cardStyle: string ="width: 250px;height: 330px;";
  ranButStyle: string = "width: 200px;height: 40px;text-align:center;line-height:1em;background-color: lightseagreen;outline: none !important;border: none;"
  randomTriggered: boolean = false;
  navigator: number=0;
  eventList: any;

  constructor(private randomizerService: RandomizerService) { 
  }
  ngOnInit(): void {

    this.minFromDate = this.dateFunc(this.now);
    //this.now.setDate(this.now.getDate()+1);
    this.minToDate = this.dateFunc(this.now);
    this.randomizerService.sendGetAllTags("1").subscribe(
      (data: any)=>{console.log(data);this.eventList=data;})
  }
  dateFunc(today:Date): string{
    var dd:string = today.getDate().toString();
    var mm:string = (today.getMonth()+1).toString();
    var yyyy = today.getFullYear();
    if(today.getDate()<10){
      dd='0'+dd;
    }
    if(today.getMonth()+1<10){
      mm='0'+mm;
    }
    return yyyy+'-'+mm+'-'+dd;
  }
  valueChange(){
    this.minToDate=this.minFromDate;
  }
  onRandomize(){
    this.randomizeFunctionality();
  }
  randomizeFunctionality(){
    console.log(this.eventList);
    if(this.navigator<this.eventList.length){
      this.cardValues.cost1=this.eventList[this.navigator].price;
      this.cardValues.participants1=this.eventList[this.navigator].maximumPax;
      this.cardValues.name1=this.eventList[this.navigator].eventName;
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost2=this.eventList[this.navigator].price;
      this.cardValues.participants2=this.eventList[this.navigator].maximumPax;
      this.cardValues.name2=this.eventList[this.navigator].eventName;
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost3=this.eventList[this.navigator].price;
      this.cardValues.participants3=this.eventList[this.navigator].maximumPax;
      this.cardValues.name3=this.eventList[this.navigator].eventName;
      this.navigator++;
    }
    this.randomTriggered=true;
    this.cardStyle = this.cardStyle + "opacity: 0.2;";
    this.ranButStyle = this.ranButStyle + "visibility: hidden;display: none";
    console.log(this.eventList[this.navigator].price);
    console.log(this.navigator);
    console.log(this.eventList.length);
    console.log(this.cardValues.cost3);
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
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost2=this.eventList[this.navigator].price;
      this.cardValues.participants2=this.eventList[this.navigator].maximumPax;
      this.cardValues.name2=this.eventList[this.navigator].eventName;
      this.navigator++;
    }
    if(this.navigator<this.eventList.length){
      this.cardValues.cost3=this.eventList[this.navigator].price;
      this.cardValues.participants3=this.eventList[this.navigator].maximumPax;
      this.cardValues.name3=this.eventList[this.navigator].eventName;
      this.navigator++;
    }
  }
}
