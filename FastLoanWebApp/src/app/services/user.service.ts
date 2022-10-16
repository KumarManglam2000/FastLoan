import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Borrower } from '../models/borrower';
import { Lender } from '../models/lender';
import { MbRegister } from '../models/mb-register';
import { MlRegister } from '../models/ml-register';
import { UserLoginInfo } from '../models/user-login-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData : Lender = new Lender();
  formDataL: Borrower=new Borrower();
  g?:string;
  UpdateUserB(email : string) :Observable<Borrower> {
    this.g = 'http://localhost:5055/api/MB/'+email;
    return this.httpClient.put<Borrower>(this.g , this.formDataL)
  }
  k?:string;
  UpdateUserL(email: string) :Observable<Lender> {
    this.k = 'http://localhost:5055/api/ML/'+email;
    return this.httpClient.put<Lender>(this.k , this.formData)
  }
  
  registerUserAsLender(mlregister: MlRegister):Observable<MlRegister> {
    return this.httpClient.post<MlRegister>('http://localhost:5055/api/ML', mlregister)
  }
  registerUser(authUser: UserLoginInfo):Observable<UserLoginInfo> {
    return this.httpClient.post<UserLoginInfo>('http://localhost:5055/api/Auth/register',authUser)
  }
  registerUserAsBorrower(mbregister: MbRegister): Observable<MbRegister> {
    return this.httpClient.post<MbRegister>('http://localhost:5055/api/MB', mbregister)
  }
  constructor(private httpClient: HttpClient) { }

  loginUser(userLogingInfo: UserLoginInfo): Observable<UserLoginInfo> {
    return this.httpClient.post<UserLoginInfo>('http://localhost:5055/api/Auth/login', userLogingInfo);
  }
  


  // getLenderprofileById(lenderId:string)
  // {
  //   return this.httpClient.get('http://localhost:40390/api/ML/updateML?Email='+lenderId).toPromise().then(res => this.formData = res as Lender);
   
  // }

  getLenderprofileById(lenderId:any):Observable<Lender>{
    return this.httpClient.get<Lender>('http://localhost:5055/api/ML/'+lenderId);
 }

 getBorrowerprofileById(BorrowerId: any): Observable<Borrower> {
  return this.httpClient.get<Borrower>('http://localhost:5055/api/MB/' + BorrowerId);
}
 

}
