using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using buddy_connect.Components;
using buddy_connect.Models;

namespace buddy_connect.Controllers
{
    public class PaxController : Controller
    {
        // GET: UserProfile
        [HttpGet]
        public ActionResult Info()
        {
            if (Session["UserProfile"] is ProfileViewModel activeUser)
            {
                ViewBag.Image = "/assets/img/" + activeUser.UserName + ".jpg";
                return View(activeUser);
            }

            return RedirectToAction("Index", "Home");
        }
    }
}