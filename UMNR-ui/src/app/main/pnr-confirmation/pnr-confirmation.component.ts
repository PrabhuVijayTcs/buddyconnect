import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnr-confirmation',
  templateUrl: './pnr-confirmation.component.html',
  styleUrls: ['./pnr-confirmation.component.css']
})
export class PnrConfirmationComponent implements OnInit {
  hidePaymentPage=true;
  constructor() { }

  ngOnInit() {
    this.hidePaymentPage=true;
  }

}
