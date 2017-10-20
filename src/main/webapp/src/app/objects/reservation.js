"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var athlete_1 = require("./athlete");
var athleticTrainer_1 = require("./athleticTrainer");
var timeSlot_1 = require("./timeSlot");
var Reservation = (function () {
    function Reservation() {
        this.id = -1;
        this.athlete = new athlete_1.Athlete();
        this.athleticTrainer = new athleticTrainer_1.AthleticTrainer();
        this.timeSlot = new timeSlot_1.TimeSlot();
    }
    return Reservation;
}());
exports.Reservation = Reservation;
//# sourceMappingURL=reservation.js.map