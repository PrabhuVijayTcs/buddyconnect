using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using buddy_connect.Models;
using System.Linq;
using System.Web;

namespace buddy_connect.Components
{
    public class LoginFunctions
    {
        private static List<ProfileViewModel> returnUserProfiles()
        {
            var sourceData = File.ReadAllText(HttpContext.Current.Server.MapPath(@"~\assets\profile.json"));
            return JsonConvert.DeserializeObject<List<ProfileViewModel>>(sourceData);            
        }

        public static ProfileViewModel GetProfileData(string userName)
        {
            return returnUserProfiles().Where(x => x.UserName == userName).FirstOrDefault();            
        }
    }
}