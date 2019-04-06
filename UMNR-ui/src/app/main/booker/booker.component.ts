import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder,FormsModule, Validators, NgForm } from '@angular/forms'; 
import {MatSelectModule} from '@angular/material/select';
import { NavigationExtras, Router } from '@angular/router';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Service }  from '../../service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-booker',
  templateUrl: './booker.component.html',
  styleUrls: ['./booker.component.css']
})
export class BookerComponent implements OnInit {
  animal: string;
  name: string;
  profileData:object;
  shoppingResponse:object;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  //travelers=["Angelo","Jesse"];
  airports:object;
  constructor(private httpService:Service,private fb: FormBuilder, public router: Router,public dialog: MatDialog) { }
   loginform = this.fb.group({
     username: ['',Validators.required],
     password: ['',Validators.required]
   });
   searchModel={"selectedTravelers":["John Smith"],"tripType":"One-Way","origin":"SEA", "destination":"JFK","depart":"2019-04-07T04:00:00.000Z","return":"","adultsCount":"","childCount":"","cabinType":"Premium economy"};
/*submitData(userName,passWord){
  const data = {
    username: userName,
    password: passWord
  }
  console.log(data)
}*/
searchFlights(searchForm:NgForm){
  console.log(JSON.stringify(this.searchModel))
  this.httpService.getData("./assets/shopping.JSON").subscribe(
    shoppingResponse=>this.shoppingResponse=shoppingResponse
  );
}



ngOnInit() {
  this.httpService.getData("./assets/airports.JSON").subscribe(
    airports=>this.airports=airports
  );

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

openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '250px',
    data: {name: "seeta", animal: "lion"}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

