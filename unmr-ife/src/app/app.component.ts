import { Component,OnInit } from '@angular/core';

declare function GetWeatherInfo(obj:any):string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'unmr-ife';
  originCode : any;
	destinationCode : any;
	flightNumber: number =0;
	airlineCode:any;
	temperature:any;
	weather:any;
	
	ngOnInit() {
	this.originCode = "SEA";
	this.destinationCode = "JFK";
	this.destinationCity ="New York";
	this.flightNumber = 182;
	this.airlineCode = "DL";
	this.temperature = "23 C";
	this.weather="Cloudy";
	GetWeatherInfo(this.destinationCode);
	}
}
