"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var Athlete = (function () {
    function Athlete() {
        this.id = null;
        this.complaint = "";
        // TODO: Format the date attribute for MM/DD/YYYY
        this.lastVisit = new Date();
        this.primarySport = "";
        this.secondarySport = "";
        this.user = new user_1.User();
    }
    return Athlete;
}());
exports.Athlete = Athlete;
//# sourceMappingURL=athlete.js.map