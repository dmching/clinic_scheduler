import {Component} from "@angular/core";
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

    types : string[] = ["Athlete", "Athletic Trainer"];

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
            if (this.types.indexOf(this.userType) == this.types.indexOf("Athlete")) {
                this.loginService.athleteLogin(this.username, this.password)
                    .then(athlete => {
                        this.currentAthlete = athlete;
                        this.loginService.setActiveUser(athlete.user);
                    })
                    .catch(err => this.loginService.handleError(err));
            } else if (this.types.indexOf(this.userType) == this.types.indexOf("Athletic Trainer")) {
                this.loginService.athleticTrainerLogin(this.username, this.password)
                    .then(at => {
                        this.currentAT = at;
                        this.loginService.setActiveUser(at.user);
                    })
                    .catch(err => this.loginService.handleError(err));
            }
        } else {
            // TODO: Use bootstrap to show an alert to the user.
        }
    }
}
