import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(UserName: string, Password: string){
    if(UserName === 'Elton' && Password === '1234'){
      sessionStorage.setItem('authenticatedActive', UserName);
      return true;
    }
    return false;
  }

  Login(){
    let user = sessionStorage.getItem('authenticatedActive');
    console.log(user);
    return !(user === null);
  }
  Logout(){
    sessionStorage.removeItem('authenticatedActive');
  }
}
