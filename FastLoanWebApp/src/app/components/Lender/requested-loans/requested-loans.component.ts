import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { RequestedLoans } from './shared/requested-loans.model';
import { RequestedLoansService } from './shared/requested-loans.service';

@Component({
  selector: 'app-requested-loans',
  templateUrl: './requested-loans.component.html',
  styleUrls: ['./requested-loans.component.css']
})
export class RequestedLoansComponent implements OnInit {
 lenderId : any;
  constructor(public service: RequestedLoansService ,private routerservice : RouterService) { }

  ngOnInit(): void {
    this.lenderId= this.routerservice.getEmailIdFromLocalStorage();
    this.service.getRequestedLoans(this.lenderId);
    
    
  }
  loanOffer(loan: RequestedLoans){
    this.service.formData = Object.assign({},loan);
  }

  
 
}
