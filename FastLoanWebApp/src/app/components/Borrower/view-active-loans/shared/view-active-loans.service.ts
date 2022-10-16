import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewActiveLoans } from './view-active-loans.model';

@Injectable({
  providedIn: 'root'
})
export class ViewActiveLoansService {
  constructor(private http : HttpClient) { }
  formData : ViewActiveLoans = new ViewActiveLoans();
  list: ViewActiveLoans[] = []; 
  readonly baseURL = 'http://localhost:5055/api/Loansbid/';
  
  refreshList(borrowerId : any) {
    this.http.get(this.baseURL+borrowerId)
      .toPromise()
      .then(res =>this.list = res as ViewActiveLoans[]
        );
  }

}
