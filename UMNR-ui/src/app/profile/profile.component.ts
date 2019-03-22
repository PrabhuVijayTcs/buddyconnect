import { Component, OnInit } from '@angular/core';
import { Service }  from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData:object; 
  constructor(private httpService: Service) {
    
   }

  ngOnInit() {
    this.httpService.getData("./assets/profileData.JSON").subscribe(
      profileData=>this.profileData=profileData
    );
  }

}
