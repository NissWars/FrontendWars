import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { feedBackService } from './feedback.service';
import { StarRatingColor } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  loggedUser: string;
  form: FormGroup;
  rating:number = 1;
  list: any;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  imageSrc: string;
  fd = new FormData();
  
    constructor(private service :feedBackService,
      private router: Router) { }
  
    ngOnInit(): void {
      //this.loggedUser = sessionStorage.getItem('loggedUser');
      this.form = new FormGroup({          
        ratings: new FormControl(null, null),
        comments: new FormControl(null,Validators.required),
        file: new FormControl('', [Validators.required]),

  }) 
    }
    onRatingChanged(rating){
      this.rating = rating;
    }
    onSubmitFeedBack(data){
      console.log(data);
      data.value.ratings = this.rating;

      this.fd.append('eventSerialNumber','1');
      this.fd.append('customer','12');


      this.fd.append('rating',data.value.ratings);
      this.fd.append('comment',data.value.comments);
      this.fd.append('image',this.form.get('file').value);

      console.log(this.fd.get('image'));
      console.log(this.fd.get('rating'));


      this.service.saveFeedBack(this.fd).subscribe(resp => {
        console.log('success');
      });;
      //this.router.navigate(['/feedbackList']);
    }
    onCancel() {
      this.form.reset();
    }

    onFileChange(event) {
      const reader = new FileReader();
      
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        
        this.form.patchValue({
          file: file
        });


        reader.readAsDataURL(this.form.get('file').value);
      
        reader.onload = () => {
     
          this.imageSrc = reader.result as string;
       
          this.form.patchValue({
            fileSource: reader.result
          });
     
        };
     
      }
    }


}
