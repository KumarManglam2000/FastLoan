import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/auth.guard";
import { BorrowerDashboardComponent } from "src/app/components/borrower-dashboard/borrower-dashboard.component";
import { ChatComponent } from "src/app/components/chat/chat.component";
import { LandingPageComponent } from "src/app/components/common/landing-page/landing-page.component";
import { LogoutComponent } from "src/app/components/common/logout/logout.component";
import { LenderDashboardComponent } from "src/app/components/lender-dashboard/lender-dashboard.component";
// import { HomeComponent } from "src/app/components/home/home.component";
import { MbRegisterComponent } from "src/app/components/mb-register/mb-register.component";
import { MlRegisterComponent } from "src/app/components/ml-register/ml-register.component";
import { UserLoginComponent } from "src/app/components/user-login/user-login.component";

const routes: Routes = [
   {path: '', component:LandingPageComponent, pathMatch: 'full' },
  {path:'mlregister', component:MlRegisterComponent},
  {path:'mbregister', component:MbRegisterComponent},
  {path: 'login', component:UserLoginComponent },
 {path: 'logout', component:LogoutComponent},
 {path: 'borrower-dashbord', canActivate : [AuthGuard], loadChildren: () => import('../../components/borrower-dashboard/routing/borrower/borrower.module').then((b) => b.BorrowerModule) },
  {path: 'lender-dashbord', canActivate : [AuthGuard], loadChildren: () => import('../../components/lender-dashboard/routing/lender/lender.module').then((m) => m.LenderModule) },
  {path: 'chat', component:ChatComponent,canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
