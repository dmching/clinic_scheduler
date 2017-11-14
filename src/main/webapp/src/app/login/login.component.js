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
var message_service_1 = require("../message/message.service");
var LoginComponent = (function () {
    function LoginComponent(loginService, messageService) {
        this.loginService = loginService;
        this.messageService = messageService;
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
                    if (athlete) {
                        _this.currentAthlete = athlete;
                        _this.messageService.successMsg.heading = "Success!";
                        _this.messageService.successMsg.body = "You have successfully logged in, " +
                            "select the schedule tab to view your appointment history.";
                        _this.messageService.successMsg.display = true;
                    }
                    else {
                        // Invalid Login. Show Alert.
                        _this.messageService.errorMsg.heading = "Failed to login";
                        _this.messageService.errorMsg.body = "A user with those credentials does not exist. Please try again.";
                        _this.messageService.errorMsg.display = true;
                    }
                    _this.username = "";
                    _this.password = "";
                });
            }
            else if (this.types.indexOf(this.userType) == this.types.indexOf("Athletic Trainer")) {
                this.loginService.athleticTrainerLogin(this.username, this.password)
                    .then(function (at) {
                    if (at) {
                        _this.currentAT = at;
                    }
                    else {
                        // Invalid Login. Show Alert.
                    }
                    _this.username = "";
                    _this.password = "";
                });
            }
        }
        else {
            // Invalid Input.
            this.messageService.errorMsg.heading = "Failed to login";
            this.messageService.errorMsg.body = "Invalid login credentials. Please try again.";
            this.messageService.errorMsg.display = true;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html',
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, message_service_1.MessageService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map