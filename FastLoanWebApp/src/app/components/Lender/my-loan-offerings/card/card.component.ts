import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { CreateLoanOfferService } from '../../create-loan-offer/shared/create-loan-offer.service';
import { LoanOfferings } from '../shared/loan-offerings.model';
import { LoanOfferingsService } from '../shared/loan-offerings.service';
import { UpdateLoanOfferingsComponent } from './update-loan-offerings/update-loan-offerings.component';

export interface DialogData {
  loanOfferId: string,
  lenderId : any,
    loanType : string,
  //  loanAmount : '',
  //  timePeriod : '',
  //  rateOfInterest : '',
  //  date : '',
  //  createdBy : '',
  // lenderId: ''
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   
 loan : LoanOfferings =new LoanOfferings();
constructor(public service: LoanOfferingsService,private toastr: ToastrService,private dialogRef: MatDialog) {}

  ngOnInit(){
   
  }

openDialog(loanofferid: string,lenderid : any){

  // this.service.getDetailsById(loanofferid).subscribe(
  //   res => {
  //      console.log(res);
  //      console.log(res.LoanOfferId);
  //   },
  //   error => console.log(error)
  // );
  this.service.refreshList(lenderid);
 this.service.getDetailsById(loanofferid);
  this.dialogRef.open(UpdateLoanOfferingsComponent,{
    data : {
      loanofferid,
      lenderid
    }
  });
  
}
onDelete(loanOfferId: string,lenderId : any) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteLoanOffer(loanOfferId)
        .subscribe(
          res => {
            this.service.refreshList(lenderId);
            this.toastr.error("Loan Offer Deleted successfully", 'Loan Offer deleted');
          },
          err => { console.log(err) }
        )
    }
  }


@Input() loanofferid= '';
@Input() loantype = '';
@Input() amount = '';
@Input() timeperiod = '';
@Input() rateofinterest = '';
@Input() date = '';
@Input() lenderid = '';
}

