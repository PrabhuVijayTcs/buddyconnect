using System;
using System.Collections.Generic;

namespace buddy_connect.Models.Booking
{
    public class FareResultsViewModel
    {
        public string Origin { get; set; }

        public string OriginCityName { get; set; }

        public string DestinationCityName { get; set; }

        public string Destination { get; set; }

        public DateTime DepartureDateTime { get; set; }

        public DateTime ArrivalDateTime { get; set; }

        public List<FareGroupTripAndFareDetail> TripAndFareDetails { get; set; }
    }
}