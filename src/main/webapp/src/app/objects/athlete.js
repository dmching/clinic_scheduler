"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var athleticTrainer_1 = require("./athleticTrainer");
var Athlete = (function () {
    function Athlete() {
        this.id = -1;
        this.user = new user_1.User();
        this.sport = "";
        this.preferredAT = new athleticTrainer_1.AthleticTrainer();
    }
    return Athlete;
}());
exports.Athlete = Athlete;
//# sourceMappingURL=athlete.js.map