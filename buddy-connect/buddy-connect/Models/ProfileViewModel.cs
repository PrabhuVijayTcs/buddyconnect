using System;
using System.Drawing;

namespace buddy_connect.Models
{
    public class ProfileViewModel
    {
        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        
        public string MiddleName { get; set; }

        public string DateOfBirth { get; set; }

        public bool IsDisabled { get; set; }

        public bool IsCareGiver { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }
    }
}