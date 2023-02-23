import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 // Loget: boolean = false;
  constructor(public HardcodedAuService: HardcodedAuthenticationService) {

  }
  
  ngOnInit() {
   // this.Loget = this.HardcodedAuService.Login();
  }


}

