﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace buddy_connect.Controllers
{
    public class UserProfileController : Controller
    {
        // GET: UserProfile
        public ActionResult Index()
        {
            var activeUser = new
            {
                Firstname ="John",
                Lastname ="Smith"
            };

            ViewBag.UserName = activeUser.Firstname + " " + activeUser.Lastname;
            return View();
        }
    }
}