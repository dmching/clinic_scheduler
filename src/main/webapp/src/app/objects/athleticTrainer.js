"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var AthleticTrainer = (function () {
    function AthleticTrainer() {
        this.user = new user_1.User();
        this.firstName = "";
        this.lastName = "";
        this.type = "";
        this.primarySport = "";
    }
    return AthleticTrainer;
}());
exports.AthleticTrainer = AthleticTrainer;
//# sourceMappingURL=athleticTrainer.js.map