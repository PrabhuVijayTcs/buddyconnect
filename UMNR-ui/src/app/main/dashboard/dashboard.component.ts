import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  animal: string;
  name: string;
  private upComingTripResponseData: any;
  private recentTripDetails: any;
  private modals: any[] = [];
  private show = false;
  private bsModalRef: BsModalRef;
  private modalService: BsModalService;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    const tripDetails = this.getDummyJson();
    if (tripDetails.upComingTrips || tripDetails.recentTrips) {
      this.upComingTripResponseData = tripDetails.upComingTrips;
      this.recentTripDetails = tripDetails.recentTrips;
    }
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
