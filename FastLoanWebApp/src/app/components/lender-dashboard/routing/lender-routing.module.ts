import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { LenderDashboardComponent } from '../lender-dashboard.component';
import { ActiveLoansComponent } from '../../Lender/active-loans/active-loans.component';
import { CreateLoanOfferComponent } from '../../Lender/create-loan-offer/create-loan-offer.component';
import { MyLoanOfferingsComponent } from '../../Lender/my-loan-offerings/my-loan-offerings.component';
import { RequestedLoansComponent } from '../../Lender/requested-loans/requested-loans.component';
import { LenderComponent } from 'src/app/ManageProfile/lender/lender.component';
import { LogoutComponent } from '../../common/logout/logout.component';
import { AuthGuard } from 'src/app/auth.guard';

 const routes: Routes = [
  {path: 'lender-dashbord', component:LenderDashboardComponent, canActivate : [AuthGuard], canActivateChild : [AuthGuard] ,
  children :[
   {path: 'home', component: HomeComponent },
   {path: 'lenderprofile', component: LenderComponent ,canActivate:[AuthGuard]},
  {path: 'createloan', component: CreateLoanOfferComponent,canActivate:[AuthGuard]},
  {path: 'loanofferings', component: MyLoanOfferingsComponent ,canActivate:[AuthGuard]},
  {path: 'activeloans', component: ActiveLoansComponent ,canActivate:[AuthGuard]},
  {path: 'requestedloans', component: RequestedLoansComponent ,canActivate:[AuthGuard]},
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LenderRoutingModule { }
