import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private routerService:RouterService) { }

  ngOnInit(): void {
    this.routerService.clearLocalStorage();
    this.routerService.gotologin();
  }

}
