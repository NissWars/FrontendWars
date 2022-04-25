import { Component, OnInit } from '@angular/core';
import { cilArrowBottom, cilArrowTop } from '@coreui/icons';
import { WalletService } from './wallet.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})

export class WalletComponent implements OnInit {
  constructor(private walletService: WalletService) {
  }
  icons = { cilArrowBottom, cilArrowTop };
  iconType: string = "cilArrowBottom";
  currPage: number = 1;
  maxPage: number = 10;
  disableNext: boolean = false;
  disablePrev: boolean = false;
  usersData: any;
  balance: number = 0.0;

  datepipe: DatePipe = new DatePipe('en-US')

  ngOnInit(): void {
    this.walletService.sendGetPaginateRecords("0", ((this.currPage - 1) * 10).toString(), "1", "1").subscribe(
      (data: any) => {
        this.usersData = data;
      });
    this.walletService.sendGetCount("0").subscribe(
      (data: any) => {
        this.maxPage= data/10;
      });
    this.walletService.sendGetBalance("0").subscribe(
      (data: any) => {
        this.balance = data;
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
    this.walletService.sendGetPaginateRecords("0", ((this.currPage - 1) * 10).toString(), "1", "1").subscribe(
      (data: any) => {
        console.log(data);
        console.log(this.currPage);
        this.usersData = data;
      });
  }

  onSort() {
    if (this.iconType == "cilArrowBottom") {
      this.iconType = "cilArrowTop";
    } else {
      this.iconType = "cilArrowBottom";
    }
    console.log("clicked");
    console.log(this.iconType);
  }
}
