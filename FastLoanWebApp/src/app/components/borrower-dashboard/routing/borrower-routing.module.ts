import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { SearchLoanOfferComponent } from 'src/app/components/Borrower/search-loan-offer/search-loan-offer.component';
import { SubmitLoanRequestComponent } from 'src/app/components/Borrower/submit-loan-request/submit-loan-request.component';
import { BorrowerComponent } from 'src/app/ManageProfile/borrower/borrower.component';
import { RecommendationComponent } from 'src/app/components/Borrower/recommendation/recommendation.component';
import { ViewLoanOffersComponent } from 'src/app/components/Borrower/view-loan-offers/view-loan-offers.component';
import { LogoutComponent } from 'src/app/components/common/logout/logout.component';
import { AuthGuard } from 'src/app/auth.guard';
import { ViewActiveLoansComponent } from 'src/app/components/Borrower/view-active-loans/view-active-loans.component';
import { BorrowerDashboardComponent } from '../borrower-dashboard.component';


const routes: Routes = [
  {path: 'borrower-dashbord', component:BorrowerDashboardComponent, canActivate : [AuthGuard], canActivateChild : [AuthGuard] ,
  children :[
  {path: 'home', component: HomeComponent},
  {path: 'borrowerprofile', component: BorrowerComponent ,canActivate:[AuthGuard]},
  {path: 'viewloanoffers', component: ViewLoanOffersComponent , canActivate:[AuthGuard]},
  {path: 'viewactiveloans', component: ViewActiveLoansComponent, canActivate:[AuthGuard]},
  {path: 'SubmitLoanRequest', component: SubmitLoanRequestComponent ,canActivate:[AuthGuard]},
  {path: 'recommendationloans', component: RecommendationComponent ,canActivate:[AuthGuard]},
  ]
  }
]
// @NgModule({
//   declarations: [],
//   imports: [
//     // CommonModule
//   ]
// })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BorrowerRoutingModule { }
