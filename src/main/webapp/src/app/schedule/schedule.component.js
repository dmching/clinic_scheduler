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
var message_service_1 = require("../message/message.service");
var ScheduleComponent = (function () {
    function ScheduleComponent(loginService, scheduleService, messageService) {
        this.loginService = loginService;
        this.scheduleService = scheduleService;
        this.messageService = messageService;
        this.COMPLAINT_LENGTH = 50;
        this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        this.timesList = [];
        this.atList = [];
        this.reservations = [];
        this.historyReservations = [];
        this.currentReservation = new reservation_1.Reservation();
        this.selectedDay = this.days[0];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loginService.isLoggedIn()) {
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
            this.getSchedule();
        }
    };
    ScheduleComponent.prototype.reserve = function () {
        var _this = this;
        if (this.complaint && this.complaint.length <= this.COMPLAINT_LENGTH) {
            this.currentReservation = new reservation_1.Reservation();
            this.currentReservation.complaint = this.complaint;
            this.currentReservation.athlete = this.loginService.activeAthlete;
            this.currentReservation.athleticTrainer = this.athleticTrainers[this.atList.indexOf(this.selectedAT)];
            this.currentReservation.timeSlot = this.times[this.timesList.indexOf(this.selectedTimeSlot)];
            var today = new Date();
            var day = this.days.indexOf(this.selectedDay) + 1;
            // The list does not include Sunday, so we increment by 1 to get Monday and on.
            if (day < today.getDay()) {
                today.setDate(7 + today.getDate() - (today.getDay() - day));
                // Since the selected day occurs in the next week, we need to add 1 to represent the Saturday that is not in the list of days.
            }
            else if (day > today.getDay()) {
                today.setDate(today.getDate() + (day - today.getDay()));
            }
            else {
                today.setDate(today.getDate() + 7);
            }
            this.currentReservation.scheduledDate = (today.toDateString());
            this.scheduleService.reserve(this.currentReservation).then(function (reservation) {
                if (reservation) {
                    _this.getSchedule();
                }
                else {
                    // TODO: Error in post. Notify user.
                    _this.messageService.errorMsg.display = true;
                    _this.messageService.errorMsg.heading = "Failed to Reserve:";
                    _this.messageService.errorMsg.body = "An appointment with the given details already exists. " +
                        "Please choose another day, or preferred Athletic Trainer, and try again.";
                }
            });
        }
        else {
            // Invalid complain input.
            this.messageService.cautionMsg.display = true;
            this.messageService.cautionMsg.heading = "Invalid Complaint Input:";
            this.messageService.cautionMsg.body = "Complaint must be " + this.COMPLAINT_LENGTH + " characters or less." +
                "\nPlease enter a new value and try again.";
            this.complaint = "";
        }
    };
    ScheduleComponent.prototype.setSelected = function (reservation) {
        if (this.selectedReservation == reservation) {
            this.selectedReservation = null;
        }
        else {
            this.selectedReservation = reservation;
        }
    };
    ScheduleComponent.prototype.cancelReservation = function () {
        var _this = this;
        if (this.loginService.isAthlete && this.loginService.isLoggedIn() && this.selectedReservation && this.reservations.indexOf(this.selectedReservation) != -1) {
            this.scheduleService.cancelReservation(this.selectedReservation).then(function (result) {
                if (result) {
                    // Success
                    _this.getSchedule();
                    _this.messageService.successMsg.display = true;
                    _this.messageService.successMsg.heading = "Success";
                    _this.messageService.successMsg.body = "Successfully cancelled the selected reservation.";
                }
                else {
                    // Error in cancelling reservation
                    _this.messageService.errorMsg.display = true;
                    _this.messageService.errorMsg.heading = "Error";
                    _this.messageService.errorMsg.body = "There was an error while cancelling the selected reservation. Please contact IT support.";
                }
            });
        }
        else {
            // No row selected
            this.messageService.errorMsg.display = true;
            this.messageService.errorMsg.heading = "Could not Cancel";
            this.messageService.errorMsg.body = "Please select a row from the current appointments table to cancel, then try again.";
        }
    };
    ScheduleComponent.prototype.findMiddle = function () {
        // Get the midpoint of the list.
        var middleIndex;
        for (var _i = 0, _a = this.reservations; _i < _a.length; _i++) {
            var reservation = _a[_i];
            if (reservation.id == -1) {
                middleIndex = this.reservations.indexOf(reservation);
                break;
            }
        }
        for (var i = this.reservations.length; i > middleIndex + 1; i--) {
            this.historyReservations.push(this.reservations.pop());
        }
        this.reservations.slice(middleIndex + 1, this.reservations.length);
        // Remove the blank
        this.reservations.pop();
    };
    ScheduleComponent.prototype.getSchedule = function () {
        var _this = this;
        this.reservations = [];
        this.historyReservations = [];
        if (this.loginService.isAthlete) {
            // Athlete viewing the schedule.
            this.scheduleService.getAthleteHistory(this.loginService.activeAthlete)
                .then(function (response) {
                _this.reservations = response;
                if (_this.reservations.length == 0 && _this.reservations[0].id == -1) {
                    // No rows in the DB.
                    _this.messageService.cautionMsg.display = true;
                    _this.messageService.cautionMsg.heading = "No Results Found";
                    _this.messageService.cautionMsg.body = "You currently have no reservations or appointment history connected to your account.";
                    // Remove the blank
                    _this.reservations.pop();
                }
                else {
                    // Split into current reservations and historical reservations
                    _this.findMiddle();
                }
            });
        }
        else {
            // Athletic Trainer viewing the list.
            this.scheduleService.getAthleticTrainerWork(this.loginService.activeAT)
                .then(function (response) {
                _this.reservations = response;
                if (_this.reservations.length == 0 && _this.reservations[0].id == -1) {
                    // No rows in the DB.
                    _this.messageService.cautionMsg.display = true;
                    _this.messageService.cautionMsg.heading = "No Results Found";
                    _this.messageService.cautionMsg.body = "You currently have no reservations or appointment history connected to your account.";
                    // Remove the blank
                    _this.reservations.pop();
                }
                else {
                    // Split into current reservations and historical reservations
                    _this.findMiddle();
                }
            });
        }
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: 'schedule',
            providers: [schedule_service_1.ScheduleService],
            templateUrl: './schedule.component.html'
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, schedule_service_1.ScheduleService,
            message_service_1.MessageService])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map