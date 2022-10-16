import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { ActiveLoans } from './active-loans.model';

@Injectable({
  providedIn: 'root'
})
export class ActiveLoansService {

 

  constructor(private http : HttpClient) { 
    //this.lenderId =  this.routerservice.getEmailIdFromLocalStorage();
  }
  
 
  formData : ActiveLoans = new ActiveLoans();
  list: ActiveLoans[] = []; 
  readonly baseURL = 'http://localhost:5055/api/Loanslid/';
  
  refreshList(lenderId : any) {
    this.http.get(this.baseURL+lenderId)
      .toPromise()
      .then(res =>this.list = res as ActiveLoans[]);
  }
 
}
