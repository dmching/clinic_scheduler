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
    return AthleticTrainer;
}());
exports.AthleticTrainer = AthleticTrainer;
//# sourceMappingURL=athleticTrainer.js.map