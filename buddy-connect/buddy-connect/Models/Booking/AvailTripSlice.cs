using System;
using System.Collections.Generic;
using System.Linq;
using buddy_connect.ExtensionMethods;

namespace buddy_connect.Models.Booking
{
    public class AvailTripSlice
    {
        #region Constructor

        /// <summary>
        /// Constructor
        /// </summary>
        public AvailTripSlice()
        {
            this.Segments = new List<AvailTripSegment>();
        }

        #endregion

        #region Public Properties
        public string FlightNumber
        {
            get
            {
                string flightNumber = string.Empty;
                if (!Segments.IsNullOrEmpty())
                {
                    flightNumber = Segments.First().FlightNumber;
                }
                return flightNumber;
            }
        }

        /// <summary>
        /// Origin City Code
        /// </summary>
        public string Origin
        {
            get
            {
                string originCity = string.Empty;
                if (!Segments.IsNullOrEmpty())
                {
                    originCity = Segments.First().OriginCityCode;
                }
                return originCity;
            }
        }

        /// <summary>
        /// Destination City Code
        /// </summary>
        public string Destination
        {
            get
            {
                string destinationCity = string.Empty;
                if (!Segments.IsNullOrEmpty())
                {
                    destinationCity = Segments.Last().DestinationCityCode;
                }
                return destinationCity;
            }
        }

        /// <summary>
        /// Departure Date
        /// </summary>
        public DateTime DepartureDate
        {
            get
            {
                DateTime departureDate = DateTime.Now;
                if (!Segments.IsNullOrEmpty())
                {
                    departureDate = Segments.First().DepartureDateTime;
                }
                return departureDate;
            }
        }

        /// <summary>
        /// Arrival Date
        /// </summary>
        public DateTime ArrivalDate
        {
            get
            {
                DateTime arrivalDate = DateTime.Now;
                if (!Segments.IsNullOrEmpty())
                {
                    arrivalDate = Segments.Last().ArrivalDateTime;
                }
                return arrivalDate;
            }
        }

        /// <summary>
        /// Duration in Minutes
        /// </summary>
        public int DurationInMins
        {
            get
            {
                int durationInMins = 0;
                if (!Segments.IsNullOrEmpty())
                {
                    //Get the total duration in mins including layover time and flight duartion
                    durationInMins = Segments.Sum(x => x.LayOverTimeInMins + x.DurationInMins);
                }
                return durationInMins;
            }
        }

        /// <summary>
        /// Duration
        /// </summary>
        public string Duration
        {
            get
            {
                string durationText = string.Empty;

                if (DurationInMins > 0)
                {
                    TimeSpan durationTimeSpan = TimeSpan.FromMinutes(DurationInMins);
                    if (durationTimeSpan.Days > 0)
                    {
                        durationText = string.Concat(durationTimeSpan.Days, "d ");
                    }
                    if (durationTimeSpan.Hours > 0)
                    {
                        durationText = string.Concat(durationText, durationTimeSpan.Hours, "h ");
                    }
                    if (durationTimeSpan.Minutes > 0)
                    {
                        durationText = string.Concat(durationText, durationTimeSpan.Minutes, "m");
                    }
                }
                return durationText.Trim();
            }
        }

        /// <summary>
        /// Trip Id
        /// </summary>
        public int TripID { get; set; }

        /// <summary>
        /// IsCodeShare
        /// </summary>
        public bool IsCodeShare
        {
            get { return Segments.Any(x => x.IsCodeShare); }
        }

        public string OperatingAirline => Segments.FirstOrDefault()?.OperatingAirline;

        public string MarketingAirline => Segments.FirstOrDefault()?.MarketingAirline;

        /// <summary>
        /// Day difference (+1/-1 day)
        /// </summary>
        public int DayDifference => Convert.ToInt32(Math.Floor((ArrivalDate.Date - DepartureDate.Date).TotalDays));

        /// <summary>
        /// Stops Count
        /// </summary>
        public int StopsCount => !Segments.IsNullOrEmpty() ? (Segments.Count - 1) : 0;

        /// <summary>
        /// List of Segments
        /// </summary>
        public List<AvailTripSegment> Segments { get; set; }


        /// <summary>
        /// Stops Count
        /// </summary>
        public int NoOfStops
        {
            get { return Segments.Sum(x => x.NoOfStops); }
        }

        /// <summary>
        /// Disclaimer flag
        /// </summary>
        public bool HasDisclaimer
        {
            get { return Segments.Any(x => x.HasFlightDisclaimer); }
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Clone method
        /// </summary>
        /// <returns></returns>
        public AvailTripSlice Clone()
        {
            return new AvailTripSlice
            {
                Segments = Segments.Select(x => x.Clone()).ToList(),
                TripID = TripID
            };
        }

        #endregion

    }
}