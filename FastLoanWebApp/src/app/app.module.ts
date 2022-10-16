import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { LenderDashboardComponent } from './components/lender-dashboard/lender-dashboard.component';
import { CreateLoanOfferComponent } from './components/Lender/create-loan-offer/create-loan-offer.component';
import { MyLoanOfferingsComponent } from './components/Lender/my-loan-offerings/my-loan-offerings.component';
import { ActiveLoansComponent } from './components/Lender/active-loans/active-loans.component';
import { RequestedLoansComponent } from './components/Lender/requested-loans/requested-loans.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/Lender/my-loan-offerings/card/card.component';
import { ActiveloancardComponent } from './components/Lender/active-loans/activeloancard/activeloancard.component';
import { RequestedloancardComponent } from './components/Lender/requested-loans/requestedloancard/requestedloancard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BorrowerDashboardComponent } from './components/borrower-dashboard/borrower-dashboard.component';
import { SearchLoanOfferComponent } from './components/Borrower/search-loan-offer/search-loan-offer.component';
import { SubmitLoanRequestComponent } from './components/Borrower/submit-loan-request/submit-loan-request.component';
import { HeaderComponent } from './components/common/header/header.component';
import { BorrowerRoutingModule } from './components/borrower-dashboard/routing/borrower-routing.module';
import { BorrowerloanoffercardComponent } from './components/Borrower/view-loan-offers/Card/borrowerloanoffercard/borrowerloanoffercard.component';
import { UpdateLoanOfferingsComponent } from './components/Lender/my-loan-offerings/card/update-loan-offerings/update-loan-offerings.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { MbRegisterComponent } from './components/mb-register/mb-register.component';
import { MlRegisterComponent } from './components/ml-register/ml-register.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LogoutComponent } from './components/common/logout/logout.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { LenderRoutingModule } from './components/lender-dashboard/routing/lender-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { LandingPageComponent } from './components/common/landing-page/landing-page.component';
import { BorrowerComponent } from './ManageProfile/borrower/borrower.component';
import { LenderComponent } from './ManageProfile/lender/lender.component';
import { RequestedLoans } from './components/Lender/requested-loans/shared/requested-loans.model';
import { RecommendationComponent } from './components/Borrower/recommendation/recommendation.component';
import { ViewLoanOffersComponent } from './components/Borrower/view-loan-offers/view-loan-offers.component';
import { ViewActiveLoansComponent } from './components/Borrower/view-active-loans/view-active-loans.component';
import { ViewActiveLoanCardComponent } from './components/Borrower/view-active-loans/view-active-loan-card/view-active-loan-card.component';

@NgModule({
  declarations: [
    AppComponent,
    //LenderDashboardComponent,
    //CreateLoanOfferComponent,
    // MyLoanOfferingsComponent,
    //ActiveLoansComponent,
    // RequestedLoansComponent,
    HomeComponent,
    // CardComponent,
    // ActiveloancardComponent,
    // RequestedloancardComponent,
    //UpdateLoanOfferingsComponent,


    // BorrowerDashboardComponent,
    // SearchLoanOfferComponent,
    // SubmitLoanRequestComponent,
    // RecommendationComponent,
    // ViewLoanOffersComponent,
    // ViewActiveLoansComponent,
    // ViewActiveLoanCardComponent,
    // BorrowerloanoffercardComponent,
    HeaderComponent,
    UserLoginComponent,
    MbRegisterComponent,
    MlRegisterComponent,
    FooterComponent,
    LogoutComponent,
    ChatComponent,
    LandingPageComponent,
    BorrowerComponent,
    LenderComponent,
  ],
  imports: [
    LenderRoutingModule,
    BorrowerRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    ToastrModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
