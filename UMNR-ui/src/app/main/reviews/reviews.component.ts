import { Component, OnInit } from '@angular/core';
import { Service }  from '../../service.service';
import {HttpClientModule} from '@angular/common/http';

declare function AnalyseSentiment(obj:any,obj2:any):string;
declare function SubmitReview(obj3:any,obj4:any,obj5:any);
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
 
})
export class ReviewsComponent implements OnInit {
  custRate : number = 0;
  servRate : number = 0;
  grievRate : number = 0;
  displayRatingScore = 0;
  counter: number = 4;
  sentimentScore;
  comments: any;
  profileData: any;
 persons: any 
  constructor(private httpService:Service, private http:HttpClientModule) { }

  ngOnInit() {
	  
    this.httpService.getData("./assets/profileData.JSON").subscribe(
      profileData=>this.profileData=profileData
    );
   this.persons = [
      { name: 'Amrita',comment: 'Really happy for choosing this service to fly my kids all alone. Flight Attendant was very kind and helpful', rating: 5,sentiment: AnalyseSentiment('The site is really simple and user friendly',"1"),counterId:1},
      { name: 'Mohit',comment: 'Kids seems to have enjoyed interacting with the virtual assistant. Screen time limit is top notch', rating: 5,sentiment: AnalyseSentiment('Lot of entertainment options available',"2"),counterId:2},
      { name: 'Ritika',comment: 'Good Service and kind in-flight crew', rating: 4,sentiment: AnalyseSentiment('Happy Customer!!',"3"),counterId:3},
      
  ]; 
  }

  changeCustRate = (score$) => {
    this.custRate = score$;
  }
  changeServRate = (score$) => {
    this.servRate = score$;
  }
  changeGrievRate = (score$) => {
    this.grievRate = score$;
  }
  
  onSubmit = (comment,faReview) => {
    this.displayRatingScore = Math.round((this.custRate + this.servRate + this.grievRate)/3);
    this.persons.push({name: this.profileData.Name,comment:comment.value , rating: this.displayRatingScore, counterId:this.counter,faReview:faReview.value});
	AnalyseSentiment(comment.value+faReview.value,this.counter);
	if(faReview.value !=""){
	SubmitReview(faReview.value,this.grievRate,this.counter);
	}
	comment.value="";
	faReview.value=""
	this.counter++;
  }
}

