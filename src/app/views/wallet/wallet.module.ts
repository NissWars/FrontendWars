import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@coreui/icons-angular';
import { WalletRoutingModule } from './wallet-routing.module';
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
} from '@coreui/angular';
import { WalletComponent } from './wallet.component';

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
    IconModule
  ]
})
export class WalletModule { }
