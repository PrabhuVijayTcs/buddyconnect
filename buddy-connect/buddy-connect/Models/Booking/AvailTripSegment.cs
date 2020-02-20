using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace buddy_connect.Models.Booking
{
    public class AvailTripSegment : TripSegment
    {

        #region Constructor 

        /// <summary>
        /// Constrcutor with Trip Segment
        /// </summary>
        /// <param name="segment"></param>
        public AvailTripSegment(TripSegment segment)
        {
            ArrivalDateTime = segment.ArrivalDateTime;
            DepartureDateTime = segment.DepartureDateTime;
            DestinationCityCode = segment.DestinationCityCode;
            DestinationCityName = segment.DestinationCityName;
            DurationInMins = segment.DurationInMins;
            EquipmentType = segment.EquipmentType;
            FlightNumber = segment.FlightNumber;
            IsOverNightStay = segment.IsOverNightStay;
            LayOverTimeInMins = segment.LayOverTimeInMins;
            MarketingAirline = segment.MarketingAirline;
            OperatingAirline = segment.OperatingAirline;
            OriginCityCode = segment.OriginCityCode;
            OriginCityName = segment.OriginCityName;
            SegmentID = segment.SegmentID;
            LieFlatAvailable = segment.LieFlatAvailable;
            HasFlightDisclaimer = segment.HasFlightDisclaimer;
            DisclaimerLinkText = segment.DisclaimerLinkText;
            DisclaimerPopupContent = segment.DisclaimerPopupContent;
        }

        public AvailTripSegment() { }

        #endregion

        #region Public Properties

        /// <summary>
        /// Extra comfort fee
        /// </summary>
        public decimal ExtraComfortFee { get; set; }

        /// <summary>
        /// Boolean to check for extra comfort
        /// </summary>
        public bool HasExtraComfort { get; set; }

        public bool HasPreferredSeat { get; set; }

        public decimal PreferredSeatFee { get; set; }

        #endregion

        #region Public Methods

        /// <summary>
        /// Clone Method
        /// </summary>
        /// <returns></returns>
        public AvailTripSegment Clone()
        {
            return new AvailTripSegment
            {
                ArrivalDateTime = ArrivalDateTime,
                DepartureDateTime = DepartureDateTime,
                DestinationCityCode = DestinationCityCode,
                DestinationCityName = DestinationCityName,
                DurationInMins = DurationInMins,
                NoOfStops = NoOfStops,
                EquipmentType = EquipmentType,
                FlightNumber = FlightNumber,
                IsOverNightStay = IsOverNightStay,
                LayOverTimeInMins = LayOverTimeInMins,
                MarketingAirline = MarketingAirline,
                OperatingAirline = OperatingAirline,
                OriginCityCode = OriginCityCode,
                OriginCityName = OriginCityName,
                ExtraComfortFee = ExtraComfortFee,
                SegmentID = SegmentID,
                IsCodeShare = IsCodeShare,
                HasExtraComfort = HasExtraComfort,
                LieFlatAvailable = LieFlatAvailable,
                HasFlightDisclaimer = HasFlightDisclaimer,
                DisclaimerLinkText = DisclaimerLinkText,
                DisclaimerPopupContent = DisclaimerPopupContent
            };
        }

        #endregion
    }

    /// <summary>
    /// TripSegment
    /// </summary>
    public class TripSegment
    {
        /// <summary>
        /// Flight No
        /// </summary>
        public string FlightNumber { get; set; }

        /// <summary>
        /// Departure Date Time
        /// </summary>
        public DateTime DepartureDateTime { get; set; }

        /// <summary>
        /// Arrival Date Time
        /// </summary>
        public DateTime ArrivalDateTime { get; set; }

        /// <summary>
        /// Origin City Code
        /// </summary>
        public string OriginCityCode { get; set; }

        /// <summary>
        /// Origin City Name
        /// </summary>
        public string OriginCityName { get; set; }

        /// <summary>
        /// Destination City Code
        /// </summary>
        public string DestinationCityCode { get; set; }

        /// <summary>
        /// Destination City Name
        /// </summary>
        public string DestinationCityName { get; set; }

        /// <summary>
        /// Duration In Minutes
        /// </summary>
        public int DurationInMins { get; set; }

        /// <summary>
        /// Duration
        /// </summary>
        public string Duration
        {
            get
            {
                TimeSpan durationTimeSpan = TimeSpan.FromMinutes(DurationInMins);
                string durationText = string.Empty;
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
                return durationText.Trim();
            }
        }

        ///<summary>
        /// Number of Stops
        /// </summary>
        public int NoOfStops { get; set; }

        /// <summary>
        /// Segement Id
        /// </summary>
        public int SegmentID { get; set; }

        /// <summary>
        /// Equipment Type
        /// </summary>
        public string EquipmentType { get; set; }

        /// <summary>
        /// Equipment Code
        /// </summary>
        public string EquipmentCode { get; set; }

        /// <summary>
        /// Operating Airline
        /// </summary>
        public string OperatingAirline { get; set; }

        /// <summary>
        /// Marketing Airline
        /// </summary>
        public string MarketingAirline { get; set; }

        /// <summary>
        /// Over night stay indicator
        /// </summary>
        public bool IsOverNightStay { get; set; }

        /// <summary>
        /// LayOverTime in Mins
        /// </summary>
        public int LayOverTimeInMins { get; set; }

        /// <summary>
        /// Layover time
        /// </summary>
        public string LayOverTime
        {
            get
            {
                TimeSpan layoverTimeSpan = TimeSpan.FromMinutes(LayOverTimeInMins);
                string layoverText = string.Empty;
                if (layoverTimeSpan.Days > 0)
                {
                    layoverText = string.Concat(layoverTimeSpan.Days, "d ");
                }
                if (layoverTimeSpan.Hours > 0)
                {
                    layoverText = string.Concat(layoverText, layoverTimeSpan.Hours, "h ");
                }
                if (layoverTimeSpan.Minutes > 0)
                {
                    layoverText = string.Concat(layoverText, layoverTimeSpan.Minutes, "m");
                }
                return layoverText.Trim();
            }
        }

        /// <summary>
        /// Day difference
        /// </summary>
        public int DayDifference
        {
            get
            {
                return Convert.ToInt32(Math.Floor((ArrivalDateTime.Date - DepartureDateTime.Date).TotalDays));
            }
        }

        /// <summary>
        /// Is Code Share
        /// </summary>
        public bool IsCodeShare { get; set; }

        /// <summary>
        /// Lie Flat availability
        /// </summary>
        public bool LieFlatAvailable { get; set; }

        /// <summary>
        /// Flight disclaimer flag
        /// </summary>
        public bool HasFlightDisclaimer { get; set; }

        /// <summary>
        /// Display text for disclaimer link
        /// </summary>
        public string DisclaimerLinkText { get; set; }

        /// <summary>
        /// Display HTML for popup
        /// </summary>
        public string DisclaimerPopupContent { get; set; }
    }
}