import {Component} from "@angular/core";
import {User} from "../objects/user";
import {LoginService} from "./login.service";
import {Athlete} from "../objects/athlete";

@Component({
    selector: 'login',
    providers: [ LoginService ],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    currentUser : User;
    currentAthlete : Athlete;
    userType : string;

    constructor(private loginService : LoginService) {
        this.currentUser = new User();
        this.currentAthlete = new Athlete();
        this.userType = "Athlete";
    }

    login() : void {
        // Take username and password and search database for a matching user.
        if (this.currentUser.username && this.currentUser.password && this.userType) {
            if (this.userType == "Athlete") {
                this.loginService.athleteLogin(this.currentUser.username, this.currentUser.password)
                    .then(athlete => {
                        this.currentUser = athlete.user;
                        this.currentAthlete = athlete;
                    })
                    .catch(err => this.loginService.handleError(err));
            } else if (this.userType == "Athletic Trainer") {

            }
        } else {
            // TODO: Use bootstrap to show an alert to the user.
        }
        /*this.loginService.getUsers()
            .then(users => {
                this.currentUser = users.pop();
                console.log(users);
            })
            .catch(err => this.loginService.handleError(err));*/
        /*this.loginService.login(this.currentUser.username);*/
        // Issue with getting the app.component.html to recheck the ngIf after the user has logged out. 
    }
}
