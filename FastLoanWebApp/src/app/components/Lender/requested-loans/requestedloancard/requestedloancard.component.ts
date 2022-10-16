import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RecommendationService } from 'src/app/components/Borrower/recommendation/shared/shared/recommendation.service';
import { RequestedLoansService } from '../shared/requested-loans.service';

@Component({
  selector: 'app-requestedloancard',
  templateUrl: './requestedloancard.component.html',
  styleUrls: ['./requestedloancard.component.css']
})
export class RequestedloancardComponent implements OnInit {

  loanType: string = '';
  loanAmount: string = '';
  timePeriod: string = '';
  rateOfInterest: string = '';
  createdDate: string = '';



  panelOpenState = false;
  constructor(private service: RequestedLoansService, public toastr: ToastrService, public http: HttpClient, public recommendationservice: RecommendationService) { }

  ngOnInit(): void {
    this.service.getaoneOffer(this.loanofferid)
      .subscribe(
        res => {
          console.log(res);
          this.loanType = res.loanType;
          this.loanAmount = res.loanAmount
          this.timePeriod = res.timePeriod;
          this.rateOfInterest = res.rateOfInterest;
          this.createdDate = res.createdDate;
        }
      )
  }
  onDecline(loanRequestId: string) {
   
      this.service.deleteLoanRequest(loanRequestId)
        .subscribe(
          res => {
            this.service.getRequestedLoans(this.lenderId);

            this.toastr.error('Loan Request declined!');
          },
          err => { console.log(err) }
        )

  }


  onAccept(loanRequestId: string, loanOfferId: string, lenderId: any,lendername : any) {


    //  this.recommendationservice.getRelationToBorrower(this.borrowerId,this.lenderId).subscribe();
    this.service.activeloans(loanOfferId, loanRequestId);
    this.service.data.loanRequestId = loanRequestId;
    this.service.data.borrowerName = this.borrowername;
    this.service.data.borrowerId = this.borrowerId;
    this.service.data.lenderName = lendername;
    console.log(this.service.data.lenderName );
    this.recommendationservice.getRelationToBorrower(this.borrowerId, lenderId).subscribe();
    this.toastr.success("LoanRequest Accepted Successfully!", 'Success');

    //   err => { console.log(err); }
    // );
    // this.service.deleteLoanRequest(loanRequestId)
    //   .subscribe(
    //     res => {
    //       this.service.getRequestedLoans(this.lenderId);
    //     },
    //     err => { console.log(err) }
    //   )

  }

  @Input() borrowername = '';
  @Input() loanrequestid = '';
  @Input() date = '';
  @Input() sourceofpay = '';
  @Input() numberofmonths = '';
  @Input() loanofferid = '';
  @Input() lenderId = '';
  @Input() borrowerId = '';
  @Input() lendername = '';


}