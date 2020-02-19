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
        private static List<ProfileViewModel> UserProfiles;
        static LoginFunctions()
        {
            var sourceData = File.ReadAllText(HttpContext.Current.Server.MapPath(@"~\assets\profile.json"));
            UserProfiles =  JsonConvert.DeserializeObject<List<ProfileViewModel>>(sourceData);
        }

        public static ProfileViewModel GetProfileData(string userName)
        {
            return UserProfiles?.FirstOrDefault(x => x.UserName == userName);            
        }
    }
}