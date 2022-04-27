import {Component, OnDestroy, OnInit} from "@angular/core";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'warning-modal',
  templateUrl: './success-modal.component.html'
})

export class SuccessModalComponent implements OnInit {

  header: any;
  content: any;
  alertType: any;
  type: any;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    if (this.alertType === 'alert-danger') {
      this.type = 'Warning!';
    } else if (this.alertType === 'alert-success') {
      this.type = 'Success!'
    }
  }

  close() {
    this.activeModal.close();
  }
}
