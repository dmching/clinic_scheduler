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
var reservation_1 = require("../objects/reservation");
var login_service_1 = require("../login/login.service");
var schedule_service_1 = require("./schedule.service");
var ScheduleComponent = (function () {
    function ScheduleComponent(loginService, scheduleService) {
        this.loginService = loginService;
        this.scheduleService = scheduleService;
        this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        this.timesList = [];
        this.atList = [];
        this.reservations = [];
        this.currentReservation = new reservation_1.Reservation();
        this.selectedDay = this.days[0];
        for (var i = 0; i < 5; i++) {
            var reservation = new reservation_1.Reservation();
            reservation.athlete.user.firstName = "David";
            reservation.athleticTrainer.user.firstName = "Ching";
            this.reservations.push(reservation);
        }
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.getTimes().then(function (response) {
            _this.times = response;
            for (var _i = 0, _a = _this.times; _i < _a.length; _i++) {
                var time = _a[_i];
                _this.timesList.push(time.startTime + " - " + time.endTime);
            }
            _this.selectedTimeSlot = _this.timesList[0];
        });
        this.scheduleService.getATs().then(function (response) {
            _this.athleticTrainers = response;
            for (var _i = 0, _a = _this.athleticTrainers; _i < _a.length; _i++) {
                var at = _a[_i];
                _this.atList.push(at.user.firstName + " " + at.user.lastName + " - " + at.classification);
            }
            _this.selectedAT = _this.atList[0];
        });
    };
    ScheduleComponent.prototype.reserve = function () {
        this.currentReservation.athlete = this.loginService.activeAthlete;
        this.currentReservation.athleticTrainer = this.athleticTrainers[this.atList.indexOf(this.selectedAT)];
        this.currentReservation.timeSlot = this.times[this.timesList.indexOf(this.selectedTimeSlot)];
        var today = new Date();
        var day = this.days.indexOf(this.selectedDay) + 1;
        // The list does not include Sunday, so we increment by 1 to get Monday and on.
        if (day < today.getDay()) {
            this.currentReservation.scheduledDate.setDate(today.getDate() + day + 1);
            // Since the selected day occurs in the next week, we need to add 1 to represent the Saturday that is not in the list of days.
        }
        else if (day > today.getDay()) {
            this.currentReservation.scheduledDate.setDate(today.getDate() + day);
        }
        else {
            this.currentReservation.scheduledDate.setDate(today.getDate() + 7);
        }
        this.scheduleService.reserve(this.currentReservation).then(function (reservation) {
            if (reservation) {
                console.log("Success");
            }
            else {
                // TODO: Error in post. Notify user.
            }
        });
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    core_1.Component({
        selector: 'schedule',
        providers: [schedule_service_1.ScheduleService],
        templateUrl: './schedule.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, schedule_service_1.ScheduleService])
], ScheduleComponent);
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map