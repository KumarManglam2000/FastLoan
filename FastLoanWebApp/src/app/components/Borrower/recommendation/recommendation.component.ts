import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { Loanoffercard } from '../search-loan-offer/shared/loanoffercard.model';
import { LoanoffercardService } from '../search-loan-offer/shared/loanoffercard.service';
import { Recommendation } from './shared/shared/recommendation.model';
import { RecommendationService } from './shared/shared/recommendation.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  
  offers:Loanoffercard[]=[];
  borrowerId : any;
  constructor(public service: RecommendationService,public routerservice : RouterService,public loanofferservice : LoanoffercardService) { }

  ngOnInit(): void {
    this.borrowerId= this.routerservice.getEmailIdFromLocalStorage();
    this.getalloffers();
  }



  getalloffers(){
    this.service.getRecommendedLoans(this.borrowerId)
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

//   getalloffers(){
//     this.service.getRecommendedLoans(this.borrowerId)
//     .subscribe(
//       res=>{
//         this.loansIds=res;
//         console.log(res);
//         this.loansIds.forEach(x => this.getData(x.loanOfferId));
//       }
//     )
//     };
// getData(loanofferid : any)
// {
//   console.log(loanofferid);
//    this.loanofferservice.getDetailsById(loanofferid).subscribe(
//     res => {
//       this.loanOffer.loanOfferId = res.loanOfferId;
//       this.loanOffer.loanAmount = res.loanAmount;
//       this.loanOffer.loanType = res.loanType;
//       this.loanOffer.rateOfInterest = res.rateOfInterest;
//       this.loanOffer.timePeriod = res.timePeriod;
//       this.loanOffer.createdDate = res.createdDate;
//       this.loanOffer.lenderId = res.lenderId;
//       this.loanOffer.lenderName  = res.lenderName;
//       this.offers.push(this.loanOffer);
//       console.log(this.loanOffer);
//     },
//     err => {
//       console.log(err);
//     }

//    )

// }
   
}
