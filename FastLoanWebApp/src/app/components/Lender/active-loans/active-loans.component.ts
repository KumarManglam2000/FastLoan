import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { ActiveLoans } from './shared/active-loans.model';
import { ActiveLoansService } from './shared/active-loans.service';

@Component({
  selector: 'app-active-loans',
  templateUrl: './active-loans.component.html',
  styleUrls: ['./active-loans.component.css']
})
export class ActiveLoansComponent implements OnInit {

  lenderId : any;
  constructor(public service : ActiveLoansService,public routerservice: RouterService) { }

  ngOnInit(): void {
    this.lenderId =  this.routerservice.getEmailIdFromLocalStorage();
    this.service.refreshList(this.lenderId);
  }
  loanOffer(activeloan: ActiveLoans){
    this.service.formData = Object.assign({},activeloan);
  }
}
