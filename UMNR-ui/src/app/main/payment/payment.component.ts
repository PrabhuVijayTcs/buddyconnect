import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  showPaymentPage=true;
  showPnrPage=false;

  paymentObj={"name":"Jesse","number":"2432143244","cvs":"123","expDateMon":"12","expDateYear":"2021"};

  constructor() { }

  ngOnInit() {
  }

  payment(){
    this.showPaymentPage=false;
    this.showPnrPage=true;
  }

}
