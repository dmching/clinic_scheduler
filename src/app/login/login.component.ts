import { Component } from "@angular/core";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username: string = "";
    password: string = "";

    submit() {
        this.username = "submit clicked";
        this.password = "submit clicked";
    }
}