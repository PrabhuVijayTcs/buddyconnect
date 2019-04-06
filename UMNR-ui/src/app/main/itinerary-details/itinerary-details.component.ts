import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../service.service';

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.css']
})
export class ItineraryDetailsComponent implements OnInit {
  private sub: any;
  private origin;
  private destinationCity;
  private travelDate;
  private seatNumber;
  private recordLocator;
  private airlineBooked;
  shoppingResponse: any;
  constructor(private route: ActivatedRoute, private service: Service) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.destinationCity = params.destinationCity;
      this.origin = params.originCity;
      this.travelDate = params.dateRange;
      this.seatNumber = params.seatNumber;
      this.recordLocator = params.pnrNbr;
      this.airlineBooked = params.airlineBooked;
   });

   this.service.getData('./assets/shopping.json')
    .subscribe(
      shoppingResponse => {
        this.shoppingResponse = shoppingResponse;
      }, error => {
    }
  );
  }
}
