using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using buddy_connect.Components;

namespace buddy_connect.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        [HttpGet]
        public ActionResult Index()
        {           
            return View();
        }

        [HttpPost]
         public ActionResult Login(string userName)
        {
            var userProfile = LoginFunctions.GetProfileData(userName);
            return View();
        }
    }
}