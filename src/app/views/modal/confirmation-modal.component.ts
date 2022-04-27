import {Component, OnInit} from "@angular/core";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
})

export class ConfirmationModalComponent {
  header: any;
  content: any;

  constructor(private activeModal: NgbActiveModal) {
  }

  close() {
    this.activeModal.close();
  }

  confirm() {
    this.activeModal.close('yes');
  }
}
