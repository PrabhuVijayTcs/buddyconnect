import { Component, OnInit, Renderer2 } from '@angular/core';
import { Service }  from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData:object; 
  display ='none';
  showHolidays = false;
  private _renderer: Renderer2;
  constructor(private httpService: Service) {
   }

  ngOnInit() {
    this.httpService.getData("./assets/profileData.JSON").subscribe(
      profileData=>this.profileData=profileData
    );
  }
  openSchoolHolidayCal () {
    const el = document.getElementsByClassName('schoolHolidays');
    document.getElementsByClassName('schoolHolidays')[0].style.display = 'block';
    document.getElementsByClassName('backdrop')[0].style.display = 'block';
  }
  closeModalDialog () {
    const el = document.getElementsByClassName('schoolHolidays');
    document.getElementsByClassName('schoolHolidays')[0].style.display = 'none';
    document.getElementsByClassName('backdrop')[0].style.display = 'none';
  }

  openBarCode () {
    const el = document.getElementsByClassName('barCode');
    document.getElementsByClassName('barCode')[0].style.display = 'block';
    document.getElementsByClassName('backdrop')[0].style.display = 'block';
  }

  closeBarCodeModal () {
    const el = document.getElementsByClassName('barCode');
    document.getElementsByClassName('barCode')[0].style.display = 'none';
    document.getElementsByClassName('backdrop')[0].style.display = 'none';
  }
}
