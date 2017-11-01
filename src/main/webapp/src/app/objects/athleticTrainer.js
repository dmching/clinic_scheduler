"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var AthleticTrainer = (function () {
    function AthleticTrainer() {
        this.id;
        this.user = new user_1.User();
        this.classification = "";
        this.primarySport = "";
    }
    AthleticTrainer.prototype.getFullTitle = function () {
        return this.user.firstName + " " + this.user.lastName + " - " + this.classification;
    };
    return AthleticTrainer;
}());
exports.AthleticTrainer = AthleticTrainer;
//# sourceMappingURL=athleticTrainer.js.map