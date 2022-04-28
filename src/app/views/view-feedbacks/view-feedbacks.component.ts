import { Component, OnInit, Input } from '@angular/core';
import { viewFeedBacksService } from './view-feedbacks.service' ;
import { FeedBackView} from './view-feedbacks.model';

@Component({
  selector: 'app-view-feedbacks, [app-showfeedback]',
  templateUrl: './view-feedbacks.component.html',
  styleUrls: ['./view-feedbacks.component.scss']
})
export class ViewFeedbacksComponent implements OnInit {
  @Input('app-showfeedback') inData:any;

  eventID = "20220420testevent14";
  feedBackView : FeedBackView[];
  dataSource: any;

  displayedColumns: string[] = ['userName', 'rating', 'comment', 'image'];

  

  constructor(private viewFeedBacksService : viewFeedBacksService) { }

  ngOnInit(): void {
    if (this.inData != null) {
      this.eventID = this.inData;
      console.log(this.eventID);
    }

    this.loadPage();
    
    
  }

  loadPage(){

    this.viewFeedBacksService.getFeedBacks(this.eventID).subscribe(
      (res:any) => {
      
        this.feedBackView = res;

        for (let i = 0; i < this.feedBackView.length; i++) {
          this.feedBackView[i].image = 'data:image/jpeg;base64,' + this.feedBackView[i].image;
        }
        

        this.dataSource = this.feedBackView 
        
      
    },
  );

}
  
  




}
