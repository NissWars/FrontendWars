import { Component, OnInit } from '@angular/core';
import { viewFeedBacksService } from './view-feedbacks.service' ;
import { FeedBackView} from './view-feedbacks.model';

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks.component.html',
  styleUrls: ['./view-feedbacks.component.scss']
})
export class ViewFeedbacksComponent implements OnInit {

  eventID = "20220420testevent14";
  feedBackView : FeedBackView[];
  dataSource: any;

  displayedColumns: string[] = ['userName', 'rating', 'comment', 'image'];

  

  constructor(private viewFeedBacksService : viewFeedBacksService) { }

  ngOnInit(): void {

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
