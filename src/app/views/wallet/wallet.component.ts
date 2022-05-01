import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { cilArrowBottom, cilArrowTop } from '@coreui/icons';
import { WalletService } from './wallet.service';
import { DatePipe } from '@angular/common'
import { stringify } from '@angular/compiler/src/util';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/internal/operators/map';
import { Location } from '@angular/common';

export interface HistoryDTO{
  custId?:String;
  topUpAmount?:any;
  paymentMethodDesc?:String;
  eventID?:String;
  verify?:any;
}
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})

export class WalletComponent implements OnInit,AfterViewInit {
  constructor(private walletService: WalletService, private router: Router) {
    this.datasource = new MatTableDataSource();
  }
  usersData: any = {"topUpHistoryID":"a","creationDateTime" :"","topUpAmount":"1","paymentMethodDesc":"none"};
  datasource: MatTableDataSource<any>;
  displayedColumns: string[] = ['creationDateTime','topUpHistoryID','paymentMethodDesc','topUpAmount'];
  balance: number = 0.0;
  paymentType: any = ["GRAB PAY","APPLE PAY","VISA", "MASTERCARD"];
  currPayment: any = "GRAB PAY";
  creditCard: any;
  custID: String = "0";
  amount: Number = 0;
  paymentdto: HistoryDTO={};
  subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.custID = sessionStorage.getItem('custID');
    this.walletService.sendGetPaginateRecords(this.custID).subscribe(
      (data: any) => {
        this.datasource = new MatTableDataSource(data);
        this.datasource.paginator=this.paginator;
        this.datasource.sort = this.sort;
      });
      this.walletService.sendGetBalance(this.custID).subscribe(
        (data:any)=>{
          this.balance = data.balance;
          console.log(data);
        }
      );
    this.datasource.sort = this.sort;
    this.datasource.paginator=this.paginator;
  }
  onSelect(){
    console.log(this.currPayment);
  }
  onTopUp(){
    this.paymentdto.topUpAmount=this.amount.toFixed(2);
    this.paymentdto.custId=this.custID
    this.paymentdto.paymentMethodDesc=this.currPayment;
    if((this.currPayment==this.paymentType[2]|| this.currPayment==this.paymentType[3]) && (this.creditCard.toString().length!=19))
    {
      alert("Invalid Credit Card Number");
      return;
    }
    if(this.paymentdto.topUpAmount<=0)
    {
      alert("Top Up Amount is Invalid")
    }else{
      this.walletService.saveTopUp(this.paymentdto).subscribe((val)=>{location.reload();});
    }

  }
}
function roundTo(num: number, places: number): number {
  const factor = 10 ** places;
  return Math.round(num*factor)/factor;
}

