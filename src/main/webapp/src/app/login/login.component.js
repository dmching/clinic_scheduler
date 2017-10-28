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
var athlete_1 = require("../objects/athlete");
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.currentUser = new user_1.User();
        this.currentAthlete = new athlete_1.Athlete();
        this.userType = "Athlete";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        // Take username and password and search database for a matching user.
        if (this.currentUser.username && this.currentUser.password && this.userType) {
            if (this.userType == "Athlete") {
                this.loginService.athleteLogin(this.currentUser.username, this.currentUser.password)
                    .then(function (athlete) {
                    _this.currentUser = athlete.user;
                    _this.currentAthlete = athlete;
                })
                    .catch(function (err) { return _this.loginService.handleError(err); });
            }
            else if (this.userType == "Athletic Trainer") {
            }
        }
        else {
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