import { Component } from '@angular/core';
import {LoginService} from "./login/login.service";
import {MessageService} from "./message/message.service";

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`
})
export class AppComponent {

  constructor(public loginService : LoginService, public messageService : MessageService) {
  }
}
