import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardat: BasicAuthenticationService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if (this.hardat.Login())
    {
      
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;

    }
 
  }
}
