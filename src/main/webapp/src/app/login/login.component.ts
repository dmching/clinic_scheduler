import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {Athlete} from "../objects/athlete";
import {AthleticTrainer} from "../objects/athleticTrainer";
import {MessageService} from "../message/message.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    private USERNAME_LENGTH : number = 30;
    private PASSWORD_LENGTH : number = 255;

    currentAthlete : Athlete;
    currentAT : AthleticTrainer;
    username : string;
    password : string;
    userType : string;

    types : string[] = ["Athlete", "Athletic Trainer"];

    constructor(private loginService : LoginService, private messageService : MessageService) {
        this.username = "";
        this.password = "";
        this.currentAT = new AthleticTrainer();
        this.currentAthlete = new Athlete();

        this.userType = "Athlete";
    }

    public login() : void {
        this.messageService.clearMessages();
        // Take username and password and search database for a matching user.
        if (this.validateInput()) {
            if (this.types.indexOf(this.userType) == this.types.indexOf("Athlete")) {
                this.loginService.athleteLogin(this.username, this.password)
                    .then(athlete => {
                        if (athlete) {
                            this.currentAthlete = athlete;
                            this.messageService.successMsg.heading = "Success!";
                            this.messageService.successMsg.body = "You have successfully logged in, " +
                                "here are your current and previous appointments.";
                            this.messageService.successMsg.display = true;
                        } else {
                            // Invalid Login. Show Alert.
                            this.messageService.errorMsg.heading = "Failed to login";
                            this.messageService.errorMsg.body = "A user with those credentials does not exist. Please try again.";
                            this.messageService.errorMsg.display = true;
                        }
                        this.username = "";
                        this.password = "";
                    })
            } else if (this.types.indexOf(this.userType) == this.types.indexOf("Athletic Trainer")) {
                this.loginService.athleticTrainerLogin(this.username, this.password)
                    .then(at => {
                        if (at) {
                            this.currentAT = at;
                            this.messageService.successMsg.heading = "Success!";
                            this.messageService.successMsg.body = "You have successfully logged in, " +
                                "here are your current and previous appointments.";
                            this.messageService.successMsg.display = true;
                        }
                        else {
                            // Invalid Login. Show Alert.
                            this.messageService.errorMsg.heading = "Failed to login";
                            this.messageService.errorMsg.body = "A user with those credentials does not exist. Please try again.";
                            this.messageService.errorMsg.display = true;
                        }
                        this.username = "";
                        this.password = "";
                    })
            }
        } else {
            // Invalid Input.
            this.messageService.errorMsg.heading = "Invalid login credentials";
            this.messageService.errorMsg.body = "Please try again.";
            this.messageService.errorMsg.display = true;
        }
    }

    private validateInput() : boolean {
        return (this.username && this.username.length <= this.USERNAME_LENGTH
            && this.password && this.password.length <= this.PASSWORD_LENGTH)
    }
}
