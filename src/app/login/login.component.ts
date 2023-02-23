import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  UserName = 'Elton';
  Password = '1234';
  error_message = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService
    ,private basicAuthenticationService: BasicAuthenticationService) { 

  }

  Login() {
    if(    this.hardcodedAuthenticationService.authenticate(this.UserName, this.Password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.UserName]);
    } else{
      this.invalidLogin = true;
    }
  }

  LoginBasic() {
    this.basicAuthenticationService.executeAthenticationService(this.UserName, this.Password).subscribe(
      data => {
      
        
        this.router.navigate(['welcome', this.UserName]);
    
        this.invalidLogin = false;
      } ,
      error => {
        console.log(error);
        this.invalidLogin = true;
      });
    }
  
      

}
