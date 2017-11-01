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
var login_service_1 = require("./login.service");
var athlete_1 = require("../objects/athlete");
var athleticTrainer_1 = require("../objects/athleticTrainer");
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.types = ["Athlete", "Athletic Trainer"];
        this.username = "";
        this.password = "";
        this.currentAT = new athleticTrainer_1.AthleticTrainer();
        this.currentAthlete = new athlete_1.Athlete();
        this.userType = "Athlete";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        // Take username and password and search database for a matching user.
        if (this.username && this.password && this.userType) {
            if (this.types.indexOf(this.userType) == this.types.indexOf("Athlete")) {
                this.loginService.athleteLogin(this.username, this.password)
                    .then(function (athlete) {
                    _this.currentAthlete = athlete;
                    _this.loginService.setActiveUser(athlete.user);
                })
                    .catch(function (err) { return _this.loginService.handleError(err); });
            }
            else if (this.types.indexOf(this.userType) == this.types.indexOf("Athletic Trainer")) {
                this.loginService.athleticTrainerLogin(this.username, this.password)
                    .then(function (at) {
                    _this.currentAT = at;
                    _this.loginService.setActiveUser(at.user);
                })
                    .catch(function (err) { return _this.loginService.handleError(err); });
            }
        }
        else {
            // TODO: Use bootstrap to show an alert to the user.
        }
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