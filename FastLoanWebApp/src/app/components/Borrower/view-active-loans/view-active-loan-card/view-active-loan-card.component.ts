import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-active-loan-card',
  templateUrl: './view-active-loan-card.component.html',
  styleUrls: ['./view-active-loan-card.component.css']
})
export class ViewActiveLoanCardComponent implements OnInit {

  panelOpenState = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  openChat()
  {
    this.router.navigate(['../../chat'])
  }
  @Input() lenderName? = '';
  @Input() loantype? ='';
  @Input() amount? = '';
  @Input() rateofinterest? = '';
  @Input() numberofmonths? = '';
  @Input() sourceofpay? = '';
  @Input() timeperiod? = '';
}
