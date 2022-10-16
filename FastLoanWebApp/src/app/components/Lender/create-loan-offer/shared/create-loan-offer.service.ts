import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import { CreateLoanOffer } from './create-loan-offer.model';

@Injectable({
  providedIn: 'root'
})
export class CreateLoanOfferService {

  constructor(private http: HttpClient, public routerservice : RouterService, public userservice : UserService) { }
  readonly baseURL = 'http://localhost:5055/api/LoanOffer'
  formData: CreateLoanOffer = new CreateLoanOffer();

  list: CreateLoanOffer[] = [];
  
  postCreateLoanOffer():Observable<CreateLoanOffer>
  {
    return this.http.post<CreateLoanOffer>(this.baseURL,this.formData);
  }


  

  refresh(lenderId : any)
  {
   
    this.formData.lenderId = lenderId; 
      console.log(lenderId); 
    this.userservice.getLenderprofileById(lenderId)
    .subscribe(
         res => {
          this.formData.lenderName =  res.name; 
          console.log(res);  
        },
        err => {
          console.log(err);
        }
      )
      
  }
}
