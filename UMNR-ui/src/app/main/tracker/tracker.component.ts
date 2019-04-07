import { Component, OnInit } from '@angular/core';

declare const google: any;
declare function GetFlightStatus(obj:any,obj2:any):string;

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
	originCode : any;
	destinationCode : any;
	destinationCity : any;
	originCity: any;
	depDate: any;
	arrDate:any;
	flightNumber: number =0;
	airlineName:any;
	airlineCode:any;
	departureTime:any;
	arrivalTime:any;
	today: any = new Date();
		
  ngOnInit() {
   this.originCode= "SEA";
   this.destinationCode ="JFK";
   this.originCity ="Seattle";
   this.destinationCity ="Newyork";
   this.depDate = this.today;
   this.arrDate = new Date();
   this.flightNumber = 1120;
   this.airlineName = "Delta Airlines";
   this.airlineCode = "DL";
   this.departureTime = "3:45 PM";
   this.arrivalTime = "12:16 AM (+1)";
   GetFlightStatus(this.flightNumber,this.depDate);
  }
  
}
