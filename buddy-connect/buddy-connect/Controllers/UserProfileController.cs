using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
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
                ViewBag.ProfileUserName = activeUser.UserName;
                ViewBag.Image = "/assets/img/" + activeUser.UserName + ".jpg";
            }
            else
            {
                FormsAuthentication.SignOut();
                return RedirectToAction("Index","Login");
                
            }
            return View(activeUser);
        }
    }
}