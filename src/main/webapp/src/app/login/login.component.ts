import {Component} from "@angular/core";
import {User} from "../objects/user";
import {LoginService} from "./login.service";
import {Athlete} from "../objects/athlete";
import {AthleticTrainer} from "../objects/athleticTrainer";

@Component({
    selector: 'login',
    providers: [ LoginService ],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    currentAthlete : Athlete;
    currentAT : AthleticTrainer;
    username : string;
    password : string;
    userType : string;

    constructor(private loginService : LoginService) {
        this.username = "";
        this.password = "";
        this.currentAT = new AthleticTrainer();
        this.currentAthlete = new Athlete();

        this.userType = "Athlete";
    }

    login() : void {
        // Take username and password and search database for a matching user.
        if (this.username && this.password && this.userType) {
            if (this.userType == "Athlete") {
                this.loginService.athleteLogin(this.username, this.password)
                    .then(athlete => {
                        this.currentAthlete = athlete;
                    })
                    .catch(err => this.loginService.handleError(err));
            } else if (this.userType == "Athletic Trainer") {
                this.loginService.athleticTrainerLogin(this.username, this.password)
                    .then(at => {
                        this.currentAT = at;
                        console.log(this.currentAT);
                    })
                    .catch(err => this.loginService.handleError(err));
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
