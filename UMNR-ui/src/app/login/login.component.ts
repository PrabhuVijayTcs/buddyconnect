import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,FormsModule, Validators } from '@angular/forms'; 
import {MatSelectModule} from '@angular/material/select';
import { NavigationExtras, Router } from '@angular/router';

//const localData = require('src/data.json')
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
states: string[] = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
  constructor(private fb: FormBuilder, public router: Router) { }
   loginform = this.fb.group({
     username: ['',Validators.required],
     password: ['',Validators.required]
   });
/*submitData(userName,passWord){
  const data = {
    username: userName,
    password: passWord
  }
  console.log(data)
}*/
login(){
  let redirect = 'main';

  // Set our navigation extras object
  // that passes on our global query params and fragment
  let navigationExtras: NavigationExtras = {
    queryParamsHandling: 'preserve',
    preserveFragment: true
  };

  // Redirect the user
  this.router.navigate([redirect]);
}
  
  ngOnInit() {
    //console.log("json from intenal file "+ JSON.stringify(localData) )
  }

}
