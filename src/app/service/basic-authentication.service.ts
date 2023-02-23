import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constans';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate() {
  }

  executeHelloWorld() {
    return this.http.get<authenticateBean>('http://127.0.0.1:8080/hello-beans');
  }


  executeAthenticationService(UserName: string, Password: string) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(UserName + ':' + Password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<authenticateBean>(`${API_URL}/BasicAuth`, { headers: headers })
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedActive', UserName);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  createBasicAuthenticationHttpHeader() {
    let user = 'elton11';
    let password = 'rewrite1103';
    let createBasicAuthenticationstring = 'Basic ' + window.btoa(user + ':' + password);
    return createBasicAuthenticationstring;
  }

  getAthenticatedUser() {
    return sessionStorage.getItem('authenticatedActive');
  }

  getAthenticatedToken() {
    if (this.getAthenticatedUser())
    {
      return sessionStorage.getItem('token');
    }
       return false;
  }

  Login() {
    let user = sessionStorage.getItem('authenticatedActive');
    console.log(user);
    return !(user === null);
  }
  Logout() {
    sessionStorage.removeItem('authenticatedActive');
    sessionStorage.removeItem('token');
  }


}

export class authenticateBean {
  constructor(public message: string) { }
}
