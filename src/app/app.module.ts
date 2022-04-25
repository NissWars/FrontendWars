import { NgModule} from '@angular/core';

import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
//import {matCardModule} from '@angular/material/card'; //kerrichangedvalidate
//import {matButtonModule} from '@angular/material/button'; //kerrichangedvalidate
//import {matInputModule} from '@angular/material/input'; //kerrichangedvalidate
//import {matIconModule} from '@angular/material/icon'; //kerrichangedvalidate
//import { RegisterComponent } from './views/pages/register/register.component'; //kerrichangedvalidate
import { feedBackService } from './views/feedback/feedback.service';
import { viewFeedBacksService } from './views/view-feedbacks/view-feedbacks.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { ViewFeedbacksComponent } from './views/view-feedbacks/view-feedbacks.component';
import { StarRatingComponent } from './views/star-rating/star-rating.component';
import { EventComponent } from './views/event/event.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, FeedbackComponent, ViewFeedbacksComponent , StarRatingComponent, EventComponent,],
  imports: [
   // matCardModule, //kerrichangedvalidate
   // matButtonModule, //kerrichangedvalidate
   // matInputModule, //kerrichangedvalidate
   // matIconModule, //kerrichangedvalidate
   // RegisterComponent, //kerrichangedvalidate
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
    feedBackService,
    MessageService,
    viewFeedBacksService,
    HttpErrorHandler,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
