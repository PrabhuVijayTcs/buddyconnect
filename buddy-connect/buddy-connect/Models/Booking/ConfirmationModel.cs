using System;

namespace buddy_connect.Models.Booking
{
    public class ConfirmationModel
    {
        public string RecordLocator { get; set; }

        public string Origin { get; set; }

        public string OriginCityName { get; set; }

        public string DestinationCityName { get; set; }

        public string Destination { get; set; }

        public DateTime DepartureDateTime { get; set; }

        public DateTime ArrivalDateTime { get; set; }

        public FareGroupTripAndFareDetail TripAndFareDetail { get; set; }
    }
}