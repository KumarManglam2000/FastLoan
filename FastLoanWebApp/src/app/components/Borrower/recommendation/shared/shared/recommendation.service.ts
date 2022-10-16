import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommendation } from './recommendation.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  lenderdata:any={
    lenderId: '',
   lenderName: ''
  } 
  borrowerdata: any={
  borrowerId:'',
  borrowerName:''
  }

   loanofferdata : Recommendation = new Recommendation();
  

  constructor(private httpClient: HttpClient) { }
  createBorrowerRecommendation(){
    //loanrequest.LoanRequestId='00000000-0000-0000-0000-000000000000';
  
    return  this.httpClient.post('http://localhost:5055/api/borrower',this.borrowerdata, { responseType: 'text' });
   
    }
    createLenderRecommendation(){
      //loanrequest.LoanRequestId='00000000-0000-0000-0000-000000000000';
    
      return  this.httpClient.post('http://localhost:5055/api/lender',this.lenderdata, { responseType: 'text' });
     
      }
      createLoanofferRecommendation(){
        //loanrequest.LoanRequestId='00000000-0000-0000-0000-000000000000';
      
        return  this.httpClient.post('http://localhost:5055/api/recommendation/loanoffer',this.loanofferdata, { responseType: 'text' });
       
      }

        getRelationToBorrower(borrowerId : any, lenderId : any )
        {
         return this.httpClient.get('http://localhost:5055/api/reltob/'+borrowerId+'/'+lenderId, { responseType: 'text' });
        }

        getRelationToLoanOffer(loanofferId : any, lenderId : any)
        {
          return this.httpClient.get('http://localhost:5055/api/reltolo/'+loanofferId+'/'+lenderId, { responseType: 'text' }).toPromise();
        }

        getRecommendedLoans(borrowerId : any):Observable<Recommendation[]>{
          return this.httpClient.get<Recommendation[]>('http://localhost:5055/api/LenderRecommendation/'+borrowerId);
        }
}

