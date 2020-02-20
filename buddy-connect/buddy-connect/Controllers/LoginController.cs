using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
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
         public ActionResult Index(string userName, string password)
        {
            var userProfile = LoginFunctions.GetProfileData(userName);
            Session["UserProfile"] = userProfile;
            FormsAuthentication.SignOut();
            FormsAuthentication.SetAuthCookie($"{userProfile.LastName}, {userProfile.FirstName}", true);
            var identity = new GenericIdentity($"{userProfile.LastName}, {userProfile.FirstName}");
            var principal = new GenericPrincipal(identity, new string[0]);
            HttpContext.User = principal;
            return RedirectToAction("Index","UserProfile");
        }

        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Booking");
        }
    }
}