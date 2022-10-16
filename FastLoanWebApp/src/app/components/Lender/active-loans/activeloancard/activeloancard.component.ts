import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activeloancard',
  templateUrl: './activeloancard.component.html',
  styleUrls: ['./activeloancard.component.css']
})
export class ActiveloancardComponent implements OnInit {
  panelOpenState = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  openChat()
  {
    this.router.navigate(['../../chat'])
  }
  @Input() borrowername? = '';
  @Input() loantype? ='';
  @Input() amount? = '';
  @Input() rateofinterest? = '';
  @Input() numberofmonths? = '';
  @Input() sourceofpay? = '';
  @Input() timeperiod? = '';
  @Input() lenderName? = '';
}
