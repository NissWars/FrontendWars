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
import { EventService } from './views/event/event.service';
import { viewFeedBacksService } from './views/view-feedbacks/view-feedbacks.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';

// Common Component
import { SuccessModalComponent } from "./views/modal/success-modal.component";
import { ConfirmationModalComponent } from "./views/modal/confirmation-modal.component";

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
import { EventDetailComponent } from './views/event/event-detail/event-detail.component';
import { EventListComponent } from './views/event/event-list/event-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, 
    FeedbackComponent,
    ViewFeedbacksComponent ,
    StarRatingComponent,
    SuccessModalComponent,
    ConfirmationModalComponent,
    EventDetailComponent, 
    EventListComponent,

  ],
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
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
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
    EventService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
