import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenderDashboardComponent } from '../../lender-dashboard.component';
import { HeaderComponent } from 'src/app/components/common/header/header.component';
import { LenderComponent } from 'src/app/ManageProfile/lender/lender.component';
import { CreateLoanOfferComponent } from 'src/app/components/Lender/create-loan-offer/create-loan-offer.component';
import { MyLoanOfferingsComponent } from 'src/app/components/Lender/my-loan-offerings/my-loan-offerings.component';
import { ActiveLoansComponent } from 'src/app/components/Lender/active-loans/active-loans.component';
import { RequestedLoansComponent } from 'src/app/components/Lender/requested-loans/requested-loans.component';
import { LogoutComponent } from 'src/app/components/common/logout/logout.component';
import { LenderRoutingModule } from '../lender-routing.module';
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
import { BorrowerRoutingModule } from 'src/app/components/borrower-dashboard/routing/borrower-routing.module';
import { AppRoutingModule } from 'src/app/routing/app-routing/app-routing.module';
import { CardComponent } from 'src/app/components/Lender/my-loan-offerings/card/card.component';
import { ActiveloancardComponent } from 'src/app/components/Lender/active-loans/activeloancard/activeloancard.component';
import { RequestedloancardComponent } from 'src/app/components/Lender/requested-loans/requestedloancard/requestedloancard.component';
import { UpdateLoanOfferingsComponent } from 'src/app/components/Lender/my-loan-offerings/card/update-loan-offerings/update-loan-offerings.component';




@NgModule({
  declarations: [LenderDashboardComponent,CreateLoanOfferComponent,MyLoanOfferingsComponent,ActiveLoansComponent,RequestedLoansComponent,CardComponent,
    ActiveloancardComponent,
    UpdateLoanOfferingsComponent,
    RequestedloancardComponent,],
  imports: [
    CommonModule,
    LenderRoutingModule,
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
export class LenderModule { }
