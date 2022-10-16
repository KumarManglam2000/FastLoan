import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterService } from './services/router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(public routerService : RouterService){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let isUserEmailExists = this.routerService.getEmailIdFromLocalStorage();
    if(isUserEmailExists != null)
    {
       return true;
    }
    else{
      this.routerService.gotologin();
      return false;
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isUserEmailExists = this.routerService.getEmailIdFromLocalStorage();
      if(isUserEmailExists != null)
      {
         return true;
      }
      else{
        this.routerService.gotologin();
        return false;
      }
  }
  // canDeactivate(
  //   component: unknown,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     let isUserEmailExists = this.routerService.getEmailIdFromLocalStorage();
  //     if(isUserEmailExists != null)
  //     {
  //        return true;
  //     }
  //     else{

  //       return false;
  //     }
  // }
}
