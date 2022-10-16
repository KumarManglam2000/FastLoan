import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LoanOfferings } from './loan-offerings.model';

@Injectable({
  providedIn: 'root'
})
export class LoanOfferingsService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:5055/api/LoanOffer/'
  formData: LoanOfferings = new LoanOfferings();
  list: LoanOfferings[] = []; 

  deleteLoanOffer(loanOfferId: string)
  {
    return this.http.delete(this.baseURL+loanOfferId);
  }
  
  refreshList(lenderId : any) {
    this.http.get(this.baseURL+'LenderId/'+ lenderId )
      .toPromise()
      .then(res =>this.list = res as LoanOfferings[]);
  }

  updateLoanOffer(loanOfferId: string)
  {
    return this.http.put(this.baseURL+loanOfferId,this.formData);
  }
  getDetailsById(loanOfferId: string)
  {
    return this.http.get(this.baseURL+loanOfferId).toPromise().then(res => this.formData = res as LoanOfferings)
   
  }

}



