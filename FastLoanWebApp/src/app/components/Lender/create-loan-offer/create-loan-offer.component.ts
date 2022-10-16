import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import { RecommendationService } from '../../Borrower/recommendation/shared/shared/recommendation.service';
import { LoanOfferingsService } from '../my-loan-offerings/shared/loan-offerings.service';
import { CreateLoanOffer } from './shared/create-loan-offer.model';
import { CreateLoanOfferService } from './shared/create-loan-offer.service';

@Component({
  selector: 'app-create-loan-offer',
  templateUrl: './create-loan-offer.component.html',
  styleUrls: ['./create-loan-offer.component.css']
})
export class CreateLoanOfferComponent implements OnInit {
  loanOfferId : any;
  lenderId : any;
  constructor(public service: CreateLoanOfferService, private toastr: ToastrService,private routerservice : RouterService,public Loanservice: LoanOfferingsService, public userservice : UserService, public recommendationservice : RecommendationService) {

      
   }

  ngOnInit(): void {
    this.lenderId= this.routerservice.getEmailIdFromLocalStorage();
    this.service.refresh(this.lenderId);
  }
 async onSubmit(form: NgForm) {
 
 
    this.service.refresh(this.lenderId);
    
    this.service.postCreateLoanOffer()
    .subscribe(
       res => {
        this.service.refresh(this.lenderId);
        console.log(res);
         
        this.loanOfferId = res.loanOfferId;
        this.recommendationservice.loanofferdata.loanOfferId = res.loanOfferId;
        this.recommendationservice.loanofferdata.createdDate = res.createdDate;
        this.recommendationservice.loanofferdata.lenderId = res.lenderId;
        this.recommendationservice.loanofferdata.lenderName = res.lenderName;
        this.recommendationservice.loanofferdata.loanAmount = res.loanAmount;
        this.recommendationservice.loanofferdata.loanType = res.loanType;
        this.recommendationservice.loanofferdata.rateOfInterest = res.rateOfInterest;
        this.recommendationservice.loanofferdata.timePeriod = res.timePeriod;
        
        this.recommendationservice.createLoanofferRecommendation().subscribe(
          res => {
            this.recommendationservice.getRelationToLoanOffer(this.loanOfferId,this.lenderId);
          },
          err => {
            console.log(err);
          }
        );
        
        form.form.reset();
        // this.service.formData = new CreateLoanOffer();
        this.toastr.success("LoanOffer Created Successfully!",'Success');
       
      },
      err => { console.log(err); }
    );
    
  }
 
}
