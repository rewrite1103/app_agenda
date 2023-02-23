import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  hello_beans } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

   

  executeHelloWorld() {
    return this.http.get<hello_beans>('http://127.0.0.1:8080/hello-beans');
  }


  executeHelloWorldPara(name:any) {
    /*
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    }) */
    return this.http.get<hello_beans>(`http://127.0.0.1:8080/hello-beans/${name}`);
  }
/*
  createBasicAuthenticationHttpHeader() {
    let user = 'elton11';
    let password = 'rewrite1103';
    let createBasicAuthenticationstring = 'Basic ' + window.btoa(user + ':' + password);
    return createBasicAuthenticationstring;
  }
  */
}
