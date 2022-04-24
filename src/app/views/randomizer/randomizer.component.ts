import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { AfterViewInit, Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';

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
  participants1: any;
  cost1: any;
  participants2: any;
  cost2: any;
  participants3: any;
  cost3: any;
  cardStyle: string ="width: 250px;height: 330px;";
  ranButStyle: string = "width: 200px;height: 40px;text-align:center;line-height:1em;background-color: lightseagreen;outline: none !important;border: none;"
  randomTriggered: boolean = false;
  constructor() { 
  }
  ngOnInit(): void {

    this.minFromDate = this.dateFunc(this.now);
    //this.now.setDate(this.now.getDate()+1);
    this.minToDate = this.dateFunc(this.now);
    this.participants3 = 2;
    this.cost3 = 0;
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
    this.randomTriggered=true;
    this.cardStyle = this.cardStyle + "opacity: 0.2;";
    this.ranButStyle = this.ranButStyle + "visibility: hidden;display: none";
    this.cost1 = 1;
    this.participants1 =1;
    this.cost2 = 2;
    this.participants2 =0;
    console.log(this.cardStyle);
  }
  onRefresh(){
    this.cost1 = 0;
    this.participants1 =0;
    this.cost2 = 0;
    this.participants2 =0;
    this.cost3 = 0;
    this.participants3 =0;
  }
}
