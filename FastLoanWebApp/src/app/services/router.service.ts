import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  getRoleFromStorage() {
    return localStorage.getItem('USERROLE')
  }
  getEmailIdFromLocalStorage(): string | null {
    return localStorage.getItem('USEREMAIL')
  }
  
  clearLocalStorage() {
    localStorage.clear();
  }
  gotoLenderDashboard() {
    this.router.navigate(['lender-dashbord'])
  }
  setUserDetails(useremail: any, role: any) {
    localStorage.setItem('USEREMAIL', useremail),
    localStorage.setItem('USERROLE', role)
  }
  
  gotologin() {
    return this.router.navigate(['login'])
  }

  gotoBorrowerDashboard() {
     this.router.navigate(['borrower-dashbord'])
  }

  constructor(private router: Router) { }
}
