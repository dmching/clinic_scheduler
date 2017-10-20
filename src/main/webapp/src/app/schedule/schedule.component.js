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
var timeSlot_1 = require("../objects/timeSlot");
var ScheduleComponent = (function () {
    function ScheduleComponent() {
        this.reservations = [];
        this.times = [];
        for (var i = 0; i < 5; i++) {
            var reservation = new reservation_1.Reservation();
            var time = new timeSlot_1.TimeSlot();
            reservation.athlete.user.firstName = "David";
            reservation.athleticTrainer.user.firstName = "Ching";
            this.reservations.push(reservation);
            time.start_time = i;
            time.end_time = i + .5;
            this.times.push(time);
        }
    }
    ScheduleComponent.prototype.selectTime = function () {
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    core_1.Component({
        selector: 'schedule',
        templateUrl: './schedule.component.html'
    }),
    __metadata("design:paramtypes", [])
], ScheduleComponent);
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map