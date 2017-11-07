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
var login_service_1 = require("../login/login.service");
var ScheduleService = (function () {
    function ScheduleService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.scheduleUrl = "http://localhost:8080/schedule";
    }
    ScheduleService.prototype.getTimes = function () {
        var _this = this;
        return this.http.get(this.scheduleUrl + "/times")
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) {
            return _this.handleError(err);
        });
    };
    ScheduleService.prototype.getATs = function () {
        var _this = this;
        return this.http.get(this.scheduleUrl + "/ats")
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    ScheduleService.prototype.reserve = function (reservation) {
        // Reserve the time and day from the schedule screen.
        // This method is only accessable to athletes.
        var _this = this;
        var myHeaders = new http_1.Headers();
        myHeaders.set("athleteID", reservation.athlete.id + "");
        myHeaders.set("atID", reservation.athleticTrainer.id + "");
        myHeaders.set("timeslotID", reservation.timeSlot.id + "");
        myHeaders.set("scheduleDate", reservation.scheduledDate.toDateString());
        var options = new http_1.RequestOptions({ headers: myHeaders });
        return this.http.get(this.scheduleUrl + "/reservation", options)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    ScheduleService.prototype.getReservations = function () {
        // Returns the reservations for the current day, for all AT staff.
        return null;
    };
    ScheduleService.prototype.getAthleticTrainerWork = function (athleticTrainer) {
        // Return all reservations that connect to a specific athletic trainer.
        return null;
    };
    ScheduleService.prototype.getAthleteHistory = function (athlete) {
        var _this = this;
        // Returns every reservation made by an athlete, from newest to oldest.
        var myHeaders = new http_1.Headers();
        myHeaders.set("athleteID", athlete.id + "");
        var options = new http_1.RequestOptions({ headers: myHeaders });
        return this.http.get(this.scheduleUrl + "/reservation/me", options)
            .toPromise()
            .then(function (response) {
            console.log("yes");
            return response.json();
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    ScheduleService.prototype.handleError = function (error) {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, login_service_1.LoginService])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map