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
      this.destinationCity = params.destinationCity;
      this.origin = params.originCity;
      this.travelDate = params.dateRange;
      this.seatNumber = params.seatNumber;
      this.recordLocator = params.pnrNbr;
      this.airlineBooked = params.airlineBooked;
   });

this.shoppingResponse = this.getDummyJson();
  }
  getDummyJson(){
    let tripResponseData = {
      "AirShoppingRS": [{
        "ResponseOffer": [
          {
            "ResponseDateTime": "2019-03-22T11:43:59.315Z",
            "DeptAirportCode": "JFK",
            "DeptAirportName": "NEW YORK",
            "DeptDate": "2019-03-22",
            "DeptTime": "18:15",
            "ArrAirportCode": "SEA",
            "ArrAirportName": "SEATTLE",
            "ArrDate": "2019-03-22",
            "ArrTime": "21:45",
            "MarketingFlightNumber": "2950",
            "MarketingCarrierCode": "BA",
            "MarketingCarrierName": "British",
            "OperatingFlightNumber": "2950",
            "OperatingCarrierCode": "BA",
            "OperatingCarrierName": "British",
            "BaggageAllowance": 
               {   "DimensionAllowance": "56x36x23 cm",
                   "PieceAllowance": "1",
                   "WeightAllowance": "23 Kg",
               },
            "PaxDetail":
               {   "PaxEmailAddress": "emohitrao@gmail.com",
                   "PaxPhone": "5512479131",
                   "PaxPostalAddress": "Apt-A6, 3737, 88th Street, Jackson Heights, NY, 11372",
                   "PaxAgeMeasure": "12 years",
                   "PaxDOB": "2006-10-14",
                   "PaxBirthPlace": "Queens, NY",
                   "PaxGenderCode": "M",
                   "PaxLangUsage": "English",
               },
            "PaxLoyaltyAccountNumber": "3SSRFQTVDLHK/DL2950190322",
            "PaxLoyaltyProgramName": "SkyMiles",
            "FareCabinCode": "J",
            "FareCabinName": "Economy",
            "BaseFareAmount": "$215.00",
            "TotalFareAmount": "$270.00",
            "Offers":
               {   "CarrierLoyaltyOfferName": "In Flight wifi",
                   "CarrierLoyaltyOfferUnitAmount": "$20",
                   "CarrierLoyaltyOfferTotalAmount": "$20",
                   "ALacarteOfferItemID": "Paid meals",
                   "ALacarteOfferExpirationDateTime": "2019-03-25T11:43:59.315Z",
                   "ALacarteOfferBaseAmount": "$12",
                   "ALacarteOfferTotalAmount": "$12",
                   "OtherOfferDesc": "",
                   "OtherOfferBaseAmount": "",
                   "OtherOfferTotalAmount": "",
               },
            "ClassOfService": "ECONOMY",
            "SeatDetails": "30-31 legroom",
            "Baggage": "1 x 23kg checked baggage allowance, Hand baggage only",
            "Amenities": "Food and bar service",
            "FlightReference": "Flight3",
            "PriceClassReference": "PLUSFLEX",
          },
          {
            "ResponseDateTime": "2019-03-22T11:43:59.315Z",
            "DeptAirportCode": "JFK",
            "DeptAirportName": "NEW YORK",
            "DeptDate": "2019-03-22",
            "DeptTime": "17:19",
            "ArrAirportCode": "SEA",
            "ArrAirportName": "SEATTLE",
            "ArrDate": "2019-03-22",
            "ArrTime": "20:49",
            "MarketingFlightNumber": "0263",
            "MarketingCarrierCode": "B6",
            "MarketingCarrierName": "JetBlue",
            "OperatingFlightNumber": "0263",
            "OperatingCarrierCode": "B6",
            "OperatingCarrierName": "JetBlue",
            "BaggageAllowance": 
               {   "DimensionAllowance": "56x36x23 cm",
                   "PieceAllowance": "1",
                   "WeightAllowance": "23 Kg",
               },
            "PaxDetail":
               {   "PaxEmailAddress": "emohitrao@gmail.com",
                   "PaxPhone": "5512479131",
                   "PaxPostalAddress": "Apt-A6, 3737, 88th Street, Jackson Heights, NY, 11372",
                   "PaxAgeMeasure": "12 years",
                   "PaxDOB": "2006-10-14",
                   "PaxBirthPlace": "Queens, NY",
                   "PaxGenderCode": "M",
                   "PaxLangUsage": "English",
               },
            "PaxLoyaltyAccountNumber": "6011873955",
            "PaxLoyaltyProgramName": "TrueBlueMiles",
            "FareCabinCode": "J",
            "FareCabinName": "Economy",
            "BaseFareAmount": "$215.00",
            "TotalFareAmount": "$270.00",
            "Offers":
               {   "CarrierLoyaltyOfferName": "TrueBlueMiles",
                   "CarrierLoyaltyOfferUnitAmount": "$200",
                   "CarrierLoyaltyOfferTotalAmount": "$200",
                   "ALacarteOfferItemID": "Classic",
                   "ALacarteOfferExpirationDateTime": "2019-03-25T11:43:59.315Z",
                   "ALacarteOfferBaseAmount": "$315",
                   "ALacarteOfferTotalAmount": "$315",
                   "OtherOfferDesc": "",
                   "OtherOfferBaseAmount": "",
                   "OtherOfferTotalAmount": "",
               },
            "ClassOfService": "ECONOMY",
            "SeatDetails": "30-31 legroom",
            "Baggage": "1 x 23kg checked baggage allowance, Hand baggage only",
            "Amenities": "Food and bar service",
            "FlightReference": "Flight3",
            "PriceClassReference": "PLUSFLEX",
        }
        ]
      }]
    };
    return tripResponseData;
  }
}
