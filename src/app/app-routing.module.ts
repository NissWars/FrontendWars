import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { ViewFeedbacksComponent } from './views/view-feedbacks/view-feedbacks.component';
import { EventListComponent } from './views/event/event-list/event-list.component';
import { EventDetailComponent } from './views/event/event-detail/event-detail.component';
import { accountCreationComponent } from './views/pages/accountCreation/accountCreation.component'; //kerrichanged
import { registerOrganizerComponent } from './views/pages/registerOrganizer/registerOrganizer.component';
import { profileComponent } from './views/pages/profile/profile.component'; //kerrichanged
import { profileOrganizerComponent } from './views/pages/profileOrganizer/profileOrganizer.component'; //kerrichanged
import { resetPasswordComponent } from './views/pages/resetPassword/resetPassword.component';
//import { SignUpComponent } from "./views/pages/sign-up/sign-up.component"; //kerrichanged

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', //kerrichanged 
    pathMatch: 'full'
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },

    children: [

      {
        path: 'feedback', component: FeedbackComponent
    
      },

      {
        path: 'viewfeedback', component: ViewFeedbacksComponent
    
      },

      {
        path: 'event', children : [
          {path: 'list', component: EventListComponent},
          {path: 'detail', component: EventDetailComponent},
        ]
      },

      {
        path: 'rewardShop',
        loadChildren: () =>
          import('./views/rewards/shop/rewardShop.module').then((m) => m.RewardShopModule)
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./views/wallet/wallet.module').then((m) => m.WalletModule)
      },
      {
        path: 'randomizer',
        loadChildren: () =>
          import('./views/randomizer/randomizer.module').then((m) => m.RandomizerModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  { //kerrichanged
    path: 'accountCreation',
    component: accountCreationComponent,
    data: {
      title: 'Account Creation Page'
    }
  },
  { //kerrichanged
    path: 'registerOrganizer',
    component: registerOrganizerComponent,
    data: {
      title: 'Register Organizer Page'
    }
  },
  { //kerrichanged
    path: 'profile',
    component: profileComponent,
    data: {
      title: 'Profile Page'
    }
  },
  { //kerrichanged
    path: 'profileOrganizer',
    component: profileOrganizerComponent,
    data: {
      title: 'Profile Organizer Page'
    }
  },
  { //kerrichanged
    path: 'resetPassword',
    component: resetPasswordComponent,
    data: {
      title: 'Reset Password Page'
    }
  },
  /*
  { //kerrichanged
    path: 'SignUp',
    component: SignUpComponent,
    data: {
      title: 'Sign Up Page'
    }
  }*/
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
