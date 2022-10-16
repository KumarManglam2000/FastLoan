import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationComponent } from 'src/app/components/Borrower/recommendation/recommendation.component';
import { SearchLoanOfferComponent } from 'src/app/components/Borrower/search-loan-offer/search-loan-offer.component';
import { SubmitLoanRequestComponent } from 'src/app/components/Borrower/submit-loan-request/submit-loan-request.component';
import { ViewActiveLoanCardComponent } from 'src/app/components/Borrower/view-active-loans/view-active-loan-card/view-active-loan-card.component';
import { ViewActiveLoansComponent } from 'src/app/components/Borrower/view-active-loans/view-active-loans.component';
import { BorrowerloanoffercardComponent } from 'src/app/components/Borrower/view-loan-offers/Card/borrowerloanoffercard/borrowerloanoffercard.component';
import { ViewLoanOffersComponent } from 'src/app/components/Borrower/view-loan-offers/view-loan-offers.component';
import { UpdateLoanOfferingsComponent } from 'src/app/components/Lender/my-loan-offerings/card/update-loan-offerings/update-loan-offerings.component';
import { BorrowerDashboardComponent } from '../../borrower-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/routing/app-routing/app-routing.module';
import { BorrowerRoutingModule } from '../borrower-routing.module';



@NgModule({
  declarations: [BorrowerDashboardComponent,
    SearchLoanOfferComponent,
    SubmitLoanRequestComponent,
    RecommendationComponent,
    ViewLoanOffersComponent,
    ViewActiveLoansComponent,
    ViewActiveLoanCardComponent,
    BorrowerloanoffercardComponent,],
  imports: [
    CommonModule,
    BorrowerRoutingModule,
    BrowserModule,
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
    HttpClientModule,
    MatSelectModule,
    ToastrModule.forRoot()
  ]
})
export class BorrowerModule { }
