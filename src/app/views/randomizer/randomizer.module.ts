import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalComponent,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
} from '@coreui/angular';
import { RandomizerRoutingModule } from './randomizer-routing.module';
import { RandomizerComponent } from './randomizer.component';


@NgModule({
  declarations: [
    RandomizerComponent
  ],
  imports: [
    CommonModule,
    RandomizerRoutingModule,
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
    FormsModule,
    HttpClientModule,
    IconModule,
    FontAwesomeModule
  ]
})
export class RandomizerModule { }
