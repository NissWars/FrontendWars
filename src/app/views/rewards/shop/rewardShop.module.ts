import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
} from '@coreui/angular';
import { RewardShopRoutingModule } from './rewardShop-routing.module';
import { RewardShopComponent } from './rewardShop.component';


@NgModule({
  declarations: [
    RewardShopComponent,
  ],
  imports: [
    CommonModule,
    RewardShopRoutingModule,
    AvatarModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    NavModule,
    ProgressModule,
    TableModule,
    TabsModule
  ]
})
export class RewardShopModule { }
