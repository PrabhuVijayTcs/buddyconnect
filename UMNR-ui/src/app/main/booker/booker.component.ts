import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,FormsModule, Validators, NgForm } from '@angular/forms'; 
import {MatSelectModule} from '@angular/material/select';
import { NavigationExtras, Router } from '@angular/router';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Service }  from '../../service.service';

@Component({
  selector: 'app-booker',
  templateUrl: './booker.component.html',
  styleUrls: ['./booker.component.css']
})
export class BookerComponent implements OnInit {
  profileData:object;
  shoppingResponse:object;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  travelers=["Angelo","Jesse"];
states: string[] = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
  constructor(private httpService:Service,private fb: FormBuilder, public router: Router) { }
   loginform = this.fb.group({
     username: ['',Validators.required],
     password: ['',Validators.required]
   });
   searchModel={"selectedTravelers":"","tripType":"","origin":"", "destination":"","depart":"","return":"","adultsCount":"","childCount":"","cabinType":""};
/*submitData(userName,passWord){
  const data = {
    username: userName,
    password: passWord
  }
  console.log(data)
}*/
searchFlights(searchForm:NgForm){
  this.httpService.getData("./assets/shopping.JSON").subscribe(
    shoppingResponse=>this.shoppingResponse=shoppingResponse
  );
}



ngOnInit() {
  this.httpService.getData("./assets/profileData.JSON").subscribe(
    profileData=>this.profileData=profileData
  );
  //console.log("json from intenal file "+ JSON.stringify(localData) )

  this.dropdownList = [
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Bangaluru' },
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' }
  ];
  this.selectedItems = [
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' }
  ];
  this.dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
}

}
