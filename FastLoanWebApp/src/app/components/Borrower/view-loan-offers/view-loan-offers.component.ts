import { Component, OnInit } from '@angular/core';
import { Loanoffercard } from '../search-loan-offer/shared/loanoffercard.model';
import { LoanoffercardService } from '../search-loan-offer/shared/loanoffercard.service';

@Component({
  selector: 'app-view-loan-offers',
  templateUrl: './view-loan-offers.component.html',
  styleUrls: ['./view-loan-offers.component.css']
})
export class ViewLoanOffersComponent implements OnInit {
  offers:Loanoffercard[]=[];
  constructor(public service: LoanoffercardService) { }

  ngOnInit(): void {
    this.getalloffers();
  }
  getalloffers(){
    this.service.getallOffers()
    .subscribe(
      res=>{
        this.offers=res;
        console.log(res);
      }
    )
    };

    searchText:string='';

    onSearchTextChanged(searchValue:string){
      this.searchText=searchValue;
      //console.log(this.searchText);

    }
}
