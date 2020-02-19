using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using buddy_connect.Models.Booking;
using Newtonsoft.Json;

namespace buddy_connect.Controllers
{
    public class BookingController : Controller
    {
        // GET: Booking
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FlightResult()
        {
            var sourceData = System.IO.File.ReadAllText(Server.MapPath(@"~\assets\datasource\FlightResults.json"));
            var model = JsonConvert.DeserializeObject<FareResultsViewModel>(sourceData);
            return View(model);
        }
    }
}