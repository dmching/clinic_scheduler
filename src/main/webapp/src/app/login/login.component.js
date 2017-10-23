"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../objects/user");
var login_service_1 = require("./login.service");
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.currentUser = new user_1.User();
    }
    LoginComponent.prototype.submit = function () {
        // Take username and password and search database for a matching user.
        /*this.loginService.getUser(this.currentUser.username, this.currentUser.password)
            .then(user => this.currentUser = user)
            .catch(err => this.loginService.handleError(err));*/
        /*this.loginService.getUsers()
            .then(users => this.currentUser = users[0])
            .catch(err => this.loginService.handleError(err));*/
        console.log(this.currentUser.username + "\n" + this.loginService.isLoggedIn());
        this.loginService.login(this.currentUser.username);
        // Issue with getting the app.component.html to recheck the ngIf after the user has logged out. 
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        providers: [login_service_1.LoginService],
        templateUrl: './login.component.html',
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map