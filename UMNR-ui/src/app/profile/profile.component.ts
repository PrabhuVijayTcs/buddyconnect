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
    const elem = <HTMLElement>document.querySelector('.schoolHolidays');
    elem.style.display = 'block';
    const backDropElem =  <HTMLElement>document.querySelector('.backdrop');
    backDropElem.style.display = 'block';
  }
  closeModalDialog () {
    const elem = <HTMLElement>document.querySelector('.schoolHolidays');
    elem.style.display = 'none';
    const backDropElem =  <HTMLElement>document.querySelector('.backdrop');
    backDropElem.style.display = 'none';
  }

  openBarCode () {
    const elem = <HTMLElement>document.querySelector('.barCode');
    elem.style.display = 'block';
    const backDropElem =  <HTMLElement>document.querySelector('.backdrop');
    backDropElem.style.display = 'block';
  }

  closeBarCodeModal () {
    const elem = <HTMLElement>document.querySelector('.barCode');
    elem.style.display = 'none';
    const backDropElem =  <HTMLElement>document.querySelector('.backdrop');
    backDropElem.style.display = 'none';
  }
}
