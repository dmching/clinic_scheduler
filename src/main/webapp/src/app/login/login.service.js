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
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.userUrl = "/user/login";
    }
    LoginService.prototype.getUser = function (username, password) {
        var _this = this;
        var myHeaders = new http_1.Headers();
        myHeaders.set('Content-Type', 'application/json');
        var myParams = new URLSearchParams();
        myParams.set('username', username);
        myParams.set('password', password);
        var options = new http_1.RequestOptions({ headers: myHeaders, params: myParams });
        return this.http.get(this.userUrl, options)
            .toPromise()
            .then(function (response) {
            return response.json().data;
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    LoginService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get('http://localhost:8080/user/login/all')
            .toPromise()
            .then(function (response) {
            return response.json().data;
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