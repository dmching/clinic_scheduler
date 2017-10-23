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
var ScheduleService = (function () {
    function ScheduleService() {
    }
    ScheduleService.prototype.reserve = function () {
        // Reserve the time and day from the schedule screen.
        // This method is only accessable to athletes.
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
        // Returns every reservation made by an athlete, from newest to oldest.
        return null;
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    core_1.Injectable,
    __metadata("design:paramtypes", [])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map