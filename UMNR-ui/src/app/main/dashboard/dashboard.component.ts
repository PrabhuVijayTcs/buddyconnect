import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  date;
  logedInForm;
  emailId;
  password;
  display ='none';
  animal: string;
  name: string;
  private upComingTripResponseData: any;
  private recentTripDetails: any;
  private modals: any[] = [];
  private show = false;
  private bsModalRef: BsModalRef;
  private modalService: BsModalService;
  private travelers: any[] = [];
  constructor(public dialog: MatDialog) {
  }
  searchModel={"selectedTravelers":"","tripType":"","origin":"", "destination":"","depart":"","return":"","adultsCount":"","childCount":"","cabinType":""};
  ngOnInit() {
    this.date = new Date();
    this.logedInForm = new FormGroup({
      emailId: new FormControl('youremail@gmail.com',
        Validators.compose([
          Validators.required,
          Validators.pattern('[^ @]*@[^ @]*')
      ])),
      password: new FormControl('YourPassword', [
           Validators.minLength(8),
           Validators.required])
    });
    const tripDetails = this.getDummyJson();
    if (tripDetails.upComingTrips || tripDetails.recentTrips) {
      this.upComingTripResponseData = tripDetails.upComingTrips;
      this.recentTripDetails = tripDetails.recentTrips;
      for (const recentTrip of this.recentTripDetails) {
        if (recentTrip.travellers) {
          for (const travellers of recentTrip.travellers) {
            this.travelers.push(travellers);
            if (this.travelers.length > 2) {
              return this.travelers;
            }
          }
        }
      }
    }
  }

  openModalDialog() {
    this.display = 'block';
 }

 closeModalDialog() {
  this.display = 'none';
 }

  getDummyJson() {
    let tripResponseData = {
      "errors": [],
      "upComingTrips": [
        {
          "pnrNbr": "H8XKLW",
          "destinationCity": "New York City,NY(JFK)",
          "originCity": "Seattlle, Washington(SEA)",
          "dateRange": "Mar 27, 2019",
          "airlineBooked": "Delta",
          "airlineLogo": "assets/img/deltaLogo.JPG",
          "seatNumber": "32A",
          "travellers": [{
            "firstName": "John",
            "lastName": "Smith"
          }]
        },
        {
          "pnrNbr": "LBS4RT",
          "destinationCity": "Oahu- Honolulu,Hi(hnl)",
          "originCity": "Hawai Island, HI(ITO)",
          "dateRange": "April 27, 2019",
          "airlineBooked": "Hawain",
          "airlineLogo": "assets/img/hawainAirlinesLogo.JPG",
          "seatNumber": "82B",
          "travellers": [{
            "firstName": "Jane",
            "lastName": "David"
          },
          {
            "firstName": "Jasmine",
            "lastName": "David"
          }
          ]
        }
      ],
      "recentTrips": [
        {
          "pnrNbr": "LBS4RT",
          "destinationCity": "Oahu- Honolulu,Hi(hnl)",
          "originCity": "Hawai Island, HI(ITO)",
          "dateRange": "April 27, 2019",
          "airlineBooked": "Hawain",
          "airlineLogo": "assets/img/hawainAirlinesLogo.JPG",
          "isUmnrOnly": "true",
          "umnrChildExpBar": "assets/img/childExperience.JPG",
          "umnrChildExpBaralt": "child experience bar",
          "travellers": [{
            "firstName": "Jane",
            "lastName": "David"
          },
          {
            "firstName": "Jasmine",
            "lastName": "David"
          }
          ]
        },
        {
          "pnrNbr": "H8XKLW",
          "destinationCity": "New York City,NY(JFK)",
          "originCity": "Seattlle, Washington(SEA)",
          "dateRange": "Mar 27, 2019",
          "airlineBooked": "Delta",
          "airlineLogo": "assets/img/deltaLogo.JPG",
          "umnrChildExpBar": "assets/img/childExperience.JPG",
          "umnrChildExpBaralt": "child experience bar",
          "isUmnrOnly": "false",
          "travellers": [{
            "firstName": "John",
            "lastName": "Smith"
          }]
        },
        {
          "pnrNbr": "H8XKLW",
          "destinationCity": "New York City,NY(JFK)",
          "originCity": "Seattlle, Washington(SEA)",
          "dateRange": "Mar 27, 2019",
          "airlineBooked": "Delta",
          "airlineLogo": "assets/img/deltaLogo.JPG",
          "isUmnrOnly": "true",
          "umnrChildExpBar": "assets/img/childExperience.JPG",
          "umnrChildExpBaralt": "child experience bar",
          "travellers": [{
            "firstName": "John",
            "lastName": "Smith"
          }]
        }
      ]
    };
    return tripResponseData;
  }
}
