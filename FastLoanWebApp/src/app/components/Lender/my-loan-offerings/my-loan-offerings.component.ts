import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { CreateLoanOfferService } from '../create-loan-offer/shared/create-loan-offer.service';
import { LoanOfferings } from './shared/loan-offerings.model';
import { LoanOfferingsService } from './shared/loan-offerings.service';

@Component({
  selector: 'app-my-loan-offerings',
  templateUrl: './my-loan-offerings.component.html',
  styleUrls: ['./my-loan-offerings.component.css']
})
export class MyLoanOfferingsComponent implements OnInit {

  lenderId : any;
  constructor(public service: LoanOfferingsService, public routerservice : RouterService) { }

  ngOnInit(): void {
    this.lenderId =  this.routerservice.getEmailIdFromLocalStorage();
    this.service.refreshList(this.lenderId);
  }
  loanOffer(loan: LoanOfferings){
    this.service.formData = Object.assign({},loan);
  }
  
}
