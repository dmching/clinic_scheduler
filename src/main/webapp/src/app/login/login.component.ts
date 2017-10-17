import {Component} from "@angular/core";
import {User} from "../objects/user";
import {LoginService} from "./login.service";

@Component({
    selector: 'login',
    providers: [ LoginService ],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    currentUser : User;

    constructor(private loginService : LoginService) {
        this.currentUser = new User();
    }

    submit() {
        // Take username and password and search database for a matching user.
        this.loginService.getUser(this.currentUser.username, this.currentUser.password)
            .then(user => this.currentUser = user);
    }
}
