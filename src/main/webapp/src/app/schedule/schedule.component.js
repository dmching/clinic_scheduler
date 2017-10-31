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
        this.reservations = [];
        for (var i = 0; i < 5; i++) {
            var reservation = new reservation_1.Reservation();
            reservation.athlete.user.firstName = "David";
            reservation.athleticTrainer.user.firstName = "Ching";
            this.reservations.push(reservation);
        }
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.getTimes().then(function (response) { _this.times = response; });
    };
    ScheduleComponent.prototype.selectTime = function () {
    };
    ScheduleComponent.prototype.reserve = function () {
        this.scheduleService.reserve();
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