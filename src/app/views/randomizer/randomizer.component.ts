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
  participants3: any;
  cost3: any;
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
      mm='0'+mm
    }
    return yyyy+'-'+mm+'-'+dd;
  }
}
