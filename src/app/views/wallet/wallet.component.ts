import { Component, OnInit } from '@angular/core';
import { cilArrowBottom, cilArrowTop } from '@coreui/icons';
import { WalletService } from './wallet.service';
import { DatePipe } from '@angular/common'
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

export interface PaymentDTO{
  custId?:String;
  topUpAmount?:String;
  paymentMethodDesc?:String;
}
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})

export class WalletComponent implements OnInit {
  constructor(private walletService: WalletService, private router: Router) {
  }
  icons = { cilArrowBottom, cilArrowTop };
  iconType: string = "cilArrowBottom";
  currPage: number = 1;
  maxPage: number = 10;
  disableNext: boolean = false;
  disablePrev: boolean = false;
  usersData: any;
  asc: String = "1";
  col: String = "1";
  curCol: String ="1";
  balance: number = 0.0;
  paymentType: any = ["GRAB PAY","APPLE PAY","VISA", "MASTERCARD"];
  currPayment: any = "GRAB PAY";
  creditCard: any;
  amount: Number = 0;
  paymentdto: PaymentDTO={};

  datepipe: DatePipe = new DatePipe('en-US')

  ngOnInit(): void {
    this.walletService.sendGetPaginateRecords("0", ((this.currPage - 1) * 10).toString(), "1", "1").subscribe(
      (data: any) => {
        this.usersData = data;
      });
    this.walletService.sendGetCount("0").subscribe(
      (data: any) => {
        if(data%10==0){
          this.maxPage= data/10;
        }else{
          this.maxPage= Math.round(data/10);
        }
      });
    this.walletService.sendGetBalance("0").subscribe(
      (data: any) => {
        this.balance = roundTo(data,2);
      });
  }

  onClickNext() {
    this.currPage = this.currPage + 1;
    console.log("clicked");
    if (this.currPage == this.maxPage) {
      this.disableNext = true;
    }
    this.updateTable();
    this.disablePrev = false;
  }
  onClickPrev() {
    this.currPage = this.currPage - 1;
    console.log("clicked");
    if (this.currPage == 1) {
      this.disablePrev = true;
    }
    this.updateTable();
    this.disableNext = false;
  }
  updateTable() {
    this.usersData=[];
    this.walletService.sendGetPaginateRecords("0", ((this.currPage - 1) * 10).toString(), this.col, this.asc).subscribe(
      (data: any) => {
        console.log(data);
        console.log(this.currPage);
        this.usersData = data;
      });
  }

  onSort(col: Number) {
    if(this.col!=this.curCol){
      this.currPage = 1;
      this.disablePrev = true;
      this.disableNext = false;
    }
    this.col = col.toString();
    if (this.iconType == "cilArrowBottom") {
      this.iconType = "cilArrowTop";
      this.asc = "1";
    } else {
      this.iconType = "cilArrowBottom";
      this.asc = "2";
    }
    this.updateTable();
  }
  onSelect(){
    console.log(this.currPayment);
  }
  onTopUp(){
    this.paymentdto.topUpAmount=this.amount.toFixed(2).toString();
    this.paymentdto.custId="20220420000000000000";
    this.paymentdto.paymentMethodDesc=this.currPayment;
    if((this.currPayment==this.paymentType[2]|| this.currPayment==this.paymentType[3]) && (this.creditCard.toString().length!=19))
    {
      alert("Invalid Credit Card Number");
      return;
    }
    this.walletService.saveTopUp(this.paymentdto);
    this.onSort(1);
    console.log("send");
  }
}
function roundTo(num: number, places: number): number {
  const factor = 10 ** places;
  return Math.round(num*factor)/factor;
}

