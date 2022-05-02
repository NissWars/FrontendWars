import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Params, Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  eventId: any;
  panelId: any;
  custId: any;
  constructor(private classToggler: ClassToggleService,private route: Router) {
    super();
    console.log(sessionStorage.getItem('custID'));
  }
  onPanel(test:any){
    this.panelId=test;
  }
}
