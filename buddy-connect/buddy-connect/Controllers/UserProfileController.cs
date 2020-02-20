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
    public class UserProfileController : Controller
    {
        // GET: UserProfile
        [HttpGet]
        public ActionResult Index()
        {
            if (Session["UserProfile"] is ProfileViewModel activeUser)
            {
                ViewBag.UserName = activeUser.FirstName + " " + activeUser.LastName;
                ViewBag.Image = "/assets/img/" + activeUser.UserName + ".jpg";
            }
            else
            {
                return View("~/Views/Login/Index.cshtml");
                
            }
            return View(activeUser);
        }
    }
}