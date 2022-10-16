import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lender } from 'src/app/models/lender';
import { UserService } from 'src/app/services/user.service';
import { SubmitLoanRequest } from './submit-loan-request.model';

@Injectable({
  providedIn: 'root'
})
export class SubmitLoanrequestService {

  constructor(private httpClient: HttpClient, public userservice: UserService) { }

  GetAllRequest():Observable<SubmitLoanRequest[]>{
    return this.httpClient.get<SubmitLoanRequest[]>('http://localhost:5055/api/LoanRequest')
  }
  createLoanrequest(loanrequest:SubmitLoanRequest):Observable<SubmitLoanRequest>{
    //loanrequest.LoanRequestId='00000000-0000-0000-0000-000000000000';
  
    return  this.httpClient.post<SubmitLoanRequest>('http://localhost:5055/api/LoanRequest',loanrequest);
   
    }

    getaoneRequest(loanRequestId : string):Observable<SubmitLoanRequest>{
      return this.httpClient.get<SubmitLoanRequest>('http://localhost:5055/api/LoanRequest/'+loanRequestId);
   }

   getBorrowerProfileById(borrowerId:any):Observable<Lender>{
    return this.httpClient.get<Lender>('http://localhost:5055/api/MB/'+borrowerId);
  }
  
   

}
