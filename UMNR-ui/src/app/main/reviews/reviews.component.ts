import { Component, OnInit } from '@angular/core';
import { Service }  from '../../service.service';

declare function AnalyseSentiment(obj:any,obj2:any):string;
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
  constructor(private httpService:Service) { }

  ngOnInit() {
	  
    this.httpService.getData("./assets/profileData.JSON").subscribe(
      profileData=>this.profileData=profileData
    );
   this.persons = [
      { name: 'Ritika',comment: 'The site is really simple and user friendly', rating: 5,sentiment: AnalyseSentiment('The site is really simple and user friendly',"1"),counterId:1},
      { name: 'Mohit',comment: 'Lot of entertainment options available', rating: 4,sentiment: AnalyseSentiment('Lot of entertainment options available',"2"),counterId:2},
      { name: 'Amrita',comment: 'Happy Customer!!', rating: 5,sentiment: AnalyseSentiment('Happy Customer!!',"3"),counterId:3},
      
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
  
  onSubmit = (comment) => {
    this.displayRatingScore = Math.round((this.custRate + this.servRate + this.grievRate)/3);
    this.persons.push({name: this.profileData.Name,comment:comment.value , rating: this.displayRatingScore, counterId:this.counter});
	AnalyseSentiment(comment.value,this.counter);
	this.counter++;
  }
}

