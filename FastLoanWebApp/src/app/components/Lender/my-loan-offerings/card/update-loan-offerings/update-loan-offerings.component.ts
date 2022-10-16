import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RouterService } from 'src/app/services/router.service';
import { LoanOfferings } from '../../shared/loan-offerings.model';
import { LoanOfferingsService } from '../../shared/loan-offerings.service';
import { DialogData } from '../card.component';


@Component({
  selector: 'app-update-loan-offerings',
  templateUrl: './update-loan-offerings.component.html',
  styleUrls: ['./update-loan-offerings.component.css']
})
export class UpdateLoanOfferingsComponent implements OnInit {

  loanOfferId : string;
 lenderId: any;
  constructor(public service: LoanOfferingsService,private toastr: ToastrService,@Inject(MAT_DIALOG_DATA) public data: DialogData,private dialogRef : MatDialog) {
   this.loanOfferId =data.loanOfferId;
   this.lenderId = data.lenderId;
   }
   
  ngOnInit(): void {
    this.service.formData.loanOfferId=this.loanOfferId;
  }

  onCancel(){
    this.dialogRef.closeAll();
  }
  onSubmit(form: NgForm) {
    this.service.updateLoanOffer(this.service.formData.loanOfferId)
    .subscribe(
      res => {
        form.form.reset();
        this.service.formData = new LoanOfferings();
        
        if(res)
        {
        this.toastr.success("LoanOffer Updated Successfully!",'Success');
        }
        this.dialogRef.closeAll();
        this.service.refreshList(this.lenderId);
       
        
      },
      err => { console.log(err); }
    );
  }
}
