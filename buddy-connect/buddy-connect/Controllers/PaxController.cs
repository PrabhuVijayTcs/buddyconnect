using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using buddy_connect.Components;
using buddy_connect.Models;
using buddy_connect.Models.Booking;

namespace buddy_connect.Controllers
{
    public class PaxController : Controller
    {
        // GET: UserProfile
        public ActionResult Info(string flightKey, string cabinType)
        {
            var flightResults = Session["FlightResults"] as FareResultsViewModel;
            var userProfileSessionModel = (Session["UserProfile"] as ProfileViewModel) ?? new ProfileViewModel();

            ConfirmationModel confirmationModel = null;
            var selectedFlight = flightResults?.TripAndFareDetails.FirstOrDefault(x => x.UniqueReferenceKey == flightKey);

            if (selectedFlight != null)
            {
                selectedFlight.FareDetails = selectedFlight.FareDetails.Where(x => x.CabinType == cabinType).ToList();

                confirmationModel = new ConfirmationModel
                {
                    ArrivalDateTime = flightResults.ArrivalDateTime,
                    DepartureDateTime = flightResults.DepartureDateTime,
                    Destination = flightResults.Destination,
                    DestinationCityName = flightResults.DestinationCityName,
                    Origin = flightResults.Origin,
                    OriginCityName = flightResults.OriginCityName,
                    TripAndFareDetail = selectedFlight,
                    RecordLocator = GenerateRecordLocator(),
                    userProfile = userProfileSessionModel
                };
            }
            Session["ConfirmationModel"] = confirmationModel;
            if (Session["UserProfile"] is ProfileViewModel activeUser)
            {
                ViewBag.Image = "../assets/img/" + activeUser.UserName + ".jpg";
                return View(activeUser);
            }

            return RedirectToAction("Index", "Home");
        }

        private static string GenerateRecordLocator()
        {
            char[] alphabet = { 'a', 'b', 'c', 'd', 'e', 'f', 'g',
                'h', 'i', 'j', 'k', 'l', 'm', 'n',
                'o', 'p', 'q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z' };

            var random = new Random();
            var res = "";
            for (var i = 0; i < 6; i++)
                res = res + alphabet[random.Next(0, 26)];

            return res.ToUpper();
        }
    }
}