import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/Data/welcome-data.service';

export class hello_beans {

  constructor(public mensaje: string) {

  }


}



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})




export class WelcomeComponent {
  name = '';
  messegefromservice: string = "";

  constructor(router: ActivatedRoute, private service: WelcomeDataService) {
    this.name = router.snapshot.params['name'];
  }

  Getwel() {

    this.service.executeHelloWorldPara(this.name).subscribe(
      Response => this.CallBfack(Response) ,
      error => this.ErorFuntion(error)
    )

  }

  CallBfack(Response: any) {
   this.messegefromservice =  Response.mensaje;


  }

  ErorFuntion(error: any) {
 
    this.messegefromservice = error.error.message;
  }


}
