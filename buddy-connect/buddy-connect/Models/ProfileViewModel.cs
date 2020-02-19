using System;

namespace buddy_connect.Models
{
    public class ProfileViewModel
    {
        public string UserName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string MiddleName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public bool isDisabled { get; set; }

        public bool isCareGiver { get; set; }
    }
}