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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.userUrl = "http://localhost:8080/user/login";
        this.activeUser = new user_1.User();
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
            return response.json();
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
            return response.json();
        })
            .catch(function (err) { return _this.handleError(err); });
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
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map