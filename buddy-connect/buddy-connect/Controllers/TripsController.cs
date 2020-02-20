using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using buddy_connect.Models.Booking;

namespace buddy_connect.Controllers
{
    public class TripsController : Controller
    {
        // GET: Trips
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult UpComingTrips()
        {
            var confirmationModel = new ConfirmationModel();
            if (Session["ConfirmationModel"] != null)
                confirmationModel = Session["ConfirmationModel"] as ConfirmationModel;
            return View(confirmationModel);
        }
    }
}