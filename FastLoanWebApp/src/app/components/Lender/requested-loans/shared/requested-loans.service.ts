import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubmitLoanrequestService } from 'src/app/components/Borrower/submit-loan-request/shared/submit-loanrequest.service';
import { ActiveLoans } from '../../active-loans/shared/active-loans.model';
import { LoanOfferings } from '../../my-loan-offerings/shared/loan-offerings.model';
import { RequestedLoans } from './requested-loans.model';

@Injectable({
  providedIn: 'root'
})
export class RequestedLoansService {




  constructor(private http: HttpClient,public requestservice: SubmitLoanrequestService ) { }

  readonly baseURL = 'http://localhost:5055/api/LoanRequest/'

  readonly base1URL = 'http://localhost:5055/api/Loans';

  formData: RequestedLoans = new RequestedLoans();
  list: RequestedLoans[] = [];

 data: ActiveLoans =new ActiveLoans();
  getRequestedLoans(LenderId : string)
  {

      this.http.get(this.baseURL+"LoanLenderId/"+LenderId)
        .toPromise()
        .then(res =>{
          this.list = res as RequestedLoans[];
          console.log(res);
        }
          );

  }

  deleteLoanRequest(loanRequestId: string) {
    return this.http.delete(this.baseURL+loanRequestId);
  }

  getaoneOffer(loanOfferId : string):Observable<LoanOfferings>{
        return this.http.get<LoanOfferings>('http://localhost:5055/api/LoanOffer/'+loanOfferId);
     }

     activeloans(loanOfferId : string, loanRequestId : string){
      
      
      
      this.getaoneOffer(loanOfferId)
      .subscribe(
        res => {
          console.log(res);
          this.data.loanType = res.loanType;
          this.data.loanAmount = res.loanAmount
          this.data.timePeriod = res.timePeriod;
          this.data.rateOfInterest = res.rateOfInterest;
          this.data.createdDate = res.createdDate;
        
         this.requestservice.getaoneRequest(loanRequestId)
      .subscribe(
        res => {
          console.log(res);
      //  this.data.loanRequestId =  res.LoanRequestId;
         this.data.numberOfMonths = res.numberOfMonths;
         this.data.sourceOfPay = res.sourceOfPay;
         this.data.date = res.date;
         this.data.loanOfferId = res.loanOfferId;
         this.data.lenderId = res.lenderId;
        //  this.data.borrowerName = res.BorrowerName;
         // this.data.borrowerId = res.BorrowerId;
          console.log(this.data);
    this.http.post(this.base1URL, this.data).subscribe(
      res =>{
        console.log("InsidePost");
            console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    
        },
        err => {
          console.log(err);
        }

      );
       
        },
        err => {
          console.log(err);
        }
      );

   
      

          }
}
