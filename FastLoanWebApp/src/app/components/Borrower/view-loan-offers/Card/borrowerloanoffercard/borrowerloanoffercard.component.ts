import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SubmitLoanRequestComponent } from 'src/app/components/Borrower/submit-loan-request/submit-loan-request.component';

export interface DialogData {
  loanOfferId:'';
  lenderId: '';
  lenderName: '';
}
@Component({
  selector: 'app-borrowerloanoffercard',
  templateUrl: './borrowerloanoffercard.component.html',
  styleUrls: ['./borrowerloanoffercard.component.css']
})
export class BorrowerloanoffercardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(loanOfferId:string,lenderId : string,lenderName : string) {
    const dialogRef = this.dialog.open(SubmitLoanRequestComponent,
      {
        data:{
          loanOfferId,
          lenderId,
          lenderName,
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }
  @Input() loanOfferId='';
  @Input() loantype = '';
  @Input() amount = '';
  @Input() timeperiod = '';
  @Input() rateofinterest = '';
  @Input() date = '';
  @Input() lenderName = '';
  @Input() lenderId = '';
}