import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateLoanOffer } from 'src/app/components/Lender/create-loan-offer/shared/create-loan-offer.model';
import { CreateLoanOfferService } from 'src/app/components/Lender/create-loan-offer/shared/create-loan-offer.service';
import { Loanoffercard } from './shared/loanoffercard.model';
import { LoanoffercardService } from './shared/loanoffercard.service';
//import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-search-loan-offer',
  templateUrl: './search-loan-offer.component.html',
  styleUrls: ['./search-loan-offer.component.css']
})
export class SearchLoanOfferComponent implements OnInit {
// offers:Loanoffercard[]=[];
// searchTerm:string='';
//   constructor(public service: LoanoffercardService,private route:ActivatedRoute) { }

//   ngOnInit(): void {
//     // this.route.params.subscribe(params=>{
//     //   if(params.searchTerm)
//     //   this.offers=this.service.getallOffers().pipe(filter(offer=>offer.loanType.toLowerCase()));
//     // })
//    this.getalloffers();
//   }
//   searchText:any;
//   getalloffers(){
//     this.service.getallOffers()
//     .subscribe(
//       res=>{
//         this.offers=res;
//         console.log(res);
//       }
//     )
//     };
    


constructor() { }

ngOnInit(): void {

}

enteredSearchValue:string='';
@Output()
searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue);
}
    
  }