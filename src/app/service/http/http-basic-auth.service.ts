
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpBasicAuthService implements HttpInterceptor {

  constructor(
    private authBasic: BasicAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let user = 'elton11';
    // let password = 'rewrite1103';
    // let createBasicAuthenticationstring = 'Basic ' + window.btoa(user + ':' + password);
    let authString = this.authBasic.getAthenticatedToken();
    let username = this.authBasic.getAthenticatedUser();
    if (authString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: authString
        }
      })

    }
    return next.handle(request);

  }


}
