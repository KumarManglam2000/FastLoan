import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public routerservice : RouterService) { }
isAuthenticated? : boolean;
  ngOnInit(): void {
    this.isAuthenticated = this.isLoggedIn();
  }

  isLoggedIn() {
   if(this.routerservice.getEmailIdFromLocalStorage() == null)
   {
    return false;
   }
   else{
    return true;
   }
  }
  
}
