using System.Collections.Generic;

namespace buddy_connect.Models.Booking
{
    public class FareGroupTripAndFareDetail
    {

        #region Constructor

        /// <summary>
        /// Constructor
        /// </summary>
        public FareGroupTripAndFareDetail()
        {
            TripSlices = new List<AvailTripSlice>();
            FareDetails = new List<AvailFareDetail>();
        }

        #endregion

        public string UniqueReferenceKey { get; set; }

        /// <summary>
        /// Trip Slices
        /// </summary>
        public List<AvailTripSlice> TripSlices { get; set; }

        /// <summary>
        /// Fare Details
        /// </summary>
        public List<AvailFareDetail> FareDetails { get; set; }
    }
}