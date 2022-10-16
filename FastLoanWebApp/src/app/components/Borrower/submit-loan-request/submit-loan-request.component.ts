import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateLoanOffer } from 'src/app/components/Lender/create-loan-offer/shared/create-loan-offer.model';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import { RecommendationService } from '../recommendation/shared/shared/recommendation.service';
import { DialogData } from '../view-loan-offers/Card/borrowerloanoffercard/borrowerloanoffercard.component';
import { SubmitLoanRequest } from './shared/submit-loan-request.model';
import { SubmitLoanrequestService } from './shared/submit-loanrequest.service';

@Component({
  selector: 'app-submit-loan-request',
  templateUrl: './submit-loan-request.component.html',
  styleUrls: ['./submit-loan-request.component.css']
})
export class SubmitLoanRequestComponent implements OnInit {
 id:any;
  LoanRequest:SubmitLoanRequest={loanOfferId:'',
    numberOfMonths: '', sourceOfPay: '',
    date: '',
  };
  loanrequest:SubmitLoanRequest[];
  errMessage!: string;
  loanOfferId:string='';
  lenderId : any; 
  borrowerId : any;
    constructor(private Loanrequestservice:SubmitLoanrequestService,private toastr: ToastrService,private route:ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: DialogData,private routerservice : RouterService)
    {
      this.loanOfferId=data.loanOfferId;
      this.lenderId = data.lenderId;
  this.LoanRequest=new SubmitLoanRequest();
  this.loanrequest=[];

    }
    ngOnInit(): void {
      // this.CreateLoanRequest();
      this.getallrequest();
      // this.id=this.route.snapshot.params['LoanOfferId'];
      // this.getOneid();
      this.borrowerId= this.routerservice.getEmailIdFromLocalStorage();
      this.Loanrequestservice.getBorrowerProfileById(this.borrowerId)
      .subscribe(
           res => {
            this.LoanRequest.BorrowerName = res.name; 
          },
          err => {
            console.log(err);
          }
        )
      this.LoanRequest.loanOfferId=this.loanOfferId;
      this.LoanRequest.BorrowerId = this.borrowerId;
      this.LoanRequest.lenderId=this.lenderId;
      this.getallrequest();
    }
   
     getallrequest(){
      this.Loanrequestservice.GetAllRequest()
      .subscribe(
        response=>{
          //this.loanrequest=response
          console.log(response);
        }
      )
    }
    onSubmit(){
     
      this.Loanrequestservice.createLoanrequest(this.LoanRequest)
      .subscribe( 
        response=>{
          console.log(response);
          this.borrowerId = response.BorrowerId;
          this.lenderId = response.lenderId;
          this.toastr.success("LoanRequest Created Successfully!",'Success');
        }
        
      );
      
      //console.log(this.LoanRequest)
    }
  }