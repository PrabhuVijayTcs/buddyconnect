import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import * as $ from "jquery";
import { Service } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  profileData:object; 

  constructor(private httpService: Service) { }

  ngOnInit() {
    //$('[data-toggle="popover"]').popover(); 
    this.httpService.getData("./assets/profileData.JSON").subscribe(
      profileData=>this.profileData=profileData
    );
  }

}
