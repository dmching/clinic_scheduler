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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var athleticTrainer_1 = require("../objects/athleticTrainer");
var athlete_1 = require("../objects/athlete");
var router_1 = require("@angular/router");
var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.userUrl = "http://localhost:8080/user/login";
        this.activeAthlete = new athlete_1.Athlete();
        this.activeAT = new athleticTrainer_1.AthleticTrainer();
        this.loggedIn = false;
    }
    LoginService.prototype.athleteLogin = function (username, password) {
        var _this = this;
        var myHeaders = new http_1.Headers();
        myHeaders.set('username', username);
        myHeaders.set('password', password);
        var options = new http_1.RequestOptions({ headers: myHeaders });
        var url = this.userUrl + "/athlete";
        return this.http.get(url, options)
            .toPromise()
            .then(function (response) {
            _this.loggedIn = true;
            _this.isAthlete = true;
            _this.activeAthlete = response.json();
            return _this.activeAthlete;
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    LoginService.prototype.athleticTrainerLogin = function (username, password) {
        var _this = this;
        var myHeaders = new http_1.Headers();
        myHeaders.set('username', username);
        myHeaders.set('password', password);
        var options = new http_1.RequestOptions({ headers: myHeaders });
        var url = this.userUrl + "/at";
        return this.http.get(url, options)
            .toPromise()
            .then(function (response) {
            _this.loggedIn = true;
            _this.isAthlete = false;
            _this.activeAT = response.json();
            return _this.activeAT;
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    LoginService.prototype.logout = function () {
        this.loggedIn = false;
        this.isAthlete = false;
        this.router.navigate(['/dashboard']);
    };
    LoginService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    LoginService.prototype.getActiveUser = function () {
        if (this.isAthlete) {
            return this.activeAthlete.user.firstName + " " + this.activeAthlete.user.lastName;
        }
        else {
            return this.activeAT.user.firstName + " " + this.activeAT.user.lastName;
        }
    };
    // Used to test the Connection to DB.
    LoginService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.userUrl + '/all')
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    LoginService.prototype.handleError = function (error) {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map