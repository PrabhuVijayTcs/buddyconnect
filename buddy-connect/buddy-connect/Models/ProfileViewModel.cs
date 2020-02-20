using System;
using System.Drawing;

namespace buddy_connect.Models
{
    public class ProfileViewModel
    {
        public string UserName { get; set; }

        public string FirstName { get; set; } = "John";

        public string LastName { get; set; } = "Smith";
        
        public string MiddleName { get; set; }

        public string DateOfBirth { get; set; }

        public bool IsDisabled { get; set; }

        public bool IsCareGiver { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Membership { get; set; }

        public string Miles { get; set; }

        public WheelChair WheelChair { get; set; }
    }

    public class WheelChair
    {
        public string Length { get; set; }

        public string Width { get; set; }

        public string Height { get; set; }

        public string Weight { get; set; }

        public string Type { get; set; }

        public string BatteryType { get; set; }
    }
}