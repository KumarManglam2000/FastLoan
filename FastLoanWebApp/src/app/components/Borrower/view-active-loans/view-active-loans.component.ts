import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { ViewActiveLoans } from './shared/view-active-loans.model';
import { ViewActiveLoansService } from './shared/view-active-loans.service';

@Component({
  selector: 'app-view-active-loans',
  templateUrl: './view-active-loans.component.html',
  styleUrls: ['./view-active-loans.component.css']
})
export class ViewActiveLoansComponent implements OnInit {

  borrowerId : any;
  constructor(public service : ViewActiveLoansService,public routerservice: RouterService) { }

  ngOnInit(): void {this.borrowerId =  this.routerservice.getEmailIdFromLocalStorage();
    this.service.refreshList(this.borrowerId);
  }
  loanOffer(activeloan: ViewActiveLoans){
    this.service.formData = Object.assign({},activeloan);
  }

}
