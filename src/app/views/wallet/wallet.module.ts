import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@coreui/icons-angular';
import { WalletRoutingModule } from './wallet-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,MatPaginator } from '@angular/material/paginator';
import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  PaginationModule,
  ModalModule
} from '@coreui/angular';
import { WalletComponent } from './wallet.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [WalletComponent],
  imports: [
    CommonModule,
    WalletRoutingModule,
    AvatarModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    NavModule,
    ProgressModule,
    TableModule,
    TabsModule,
    PaginationModule,
    IconModule,
    ModalModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class WalletModule { }
