import { Component, OnInit } from '@angular/core';
import { viewFeedBacksService } from './view-feedbacks.service' ;
import { FeedBackView} from './view-feedbacks.model';

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks.component.html',
  styleUrls: ['./view-feedbacks.component.scss']
})
export class ViewFeedbacksComponent implements OnInit {

  eventID = "1";
  feedBackView : FeedBackView[];

  constructor(private viewFeedBacksService : viewFeedBacksService) { }

  ngOnInit(): void {

    this.loadPage();
    
    
}

loadPage(){

  this.viewFeedBacksService.getFeedBacks(this.eventID).subscribe(
    (res:any) => {
      
      this.feedBackView = res["data"];
      
    },
  );

}
  
  




}
