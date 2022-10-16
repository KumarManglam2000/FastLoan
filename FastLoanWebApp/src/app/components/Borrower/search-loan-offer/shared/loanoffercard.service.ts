import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateLoanOffer } from 'src/app/components/Lender/create-loan-offer/shared/create-loan-offer.model';
import { Loanoffercard } from './loanoffercard.model';

@Injectable({
  providedIn: 'root'
})
export class LoanoffercardService {

  constructor(private http:HttpClient) { }

  getallOffers():Observable<Loanoffercard[]>{
    return this.http.get<Loanoffercard[]>('http://localhost:5055/api/LoanOffer')
  }
  getDetailsById(loanOfferId: string):Observable<Loanoffercard>
  {
    return this.http.get<Loanoffercard>("http://localhost:5055/api/LoanOffer/"+loanOfferId)
   
  }

//   getaoneOffer(LoanOfferId:Loanoffercard):Observable<Loanoffercard[]>{
//     return this.http.get<Loanoffercard[]>('https://localhost:7048/api/LoanOffer'+LoanOfferId);
//   }
 }