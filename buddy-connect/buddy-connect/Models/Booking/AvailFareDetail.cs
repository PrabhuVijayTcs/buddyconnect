using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace buddy_connect.Models.Booking
{
    public class AvailFareDetail
    {
        #region Public Properties

        /// <summary>
        /// Cabin Type
        /// </summary>
        public string CabinType { get; set; }

        /// <summary>
        /// Display Amount
        /// </summary>
        public decimal DisplayAmount { get; set; }
        
        /// <summary>
        /// Booking Count
        /// </summary>
        public int BookingCount { get; set; }

        #endregion

    }
}