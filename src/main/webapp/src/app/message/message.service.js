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
var message_1 = require("./message");
var MessageService = (function () {
    function MessageService() {
        this.successMsg = new message_1.Message();
        this.cautionMsg = new message_1.Message();
        this.errorMsg = new message_1.Message();
    }
    // May not be used. Simpler to just change the values of the Message objects themselves.
    /*public showMessage(header : string, body : string, type : string) : void {
        this.clearMessages();

        if (type == "success") {
            this.successMsg.display = true;
            this.successMsg.heading = header;
            this.successMsg.body = body;
        } else if (type == "caution") {
            this.cautionMsg.display = true;
            this.cautionMsg.heading = header;
            this.cautionMsg.body = body;
        } else if (type == "error") {
            this.errorMsg.display = true;
            this.errorMsg.heading = header;
            this.errorMsg.body = body;
        }
    }*/
    MessageService.prototype.toggle = function (type) {
        if (type == "success") {
            this.successMsg.display = !this.successMsg.display;
        }
        else if (type == "caution") {
            this.cautionMsg.display = !this.cautionMsg.display;
        }
        else if (type == "error") {
            this.errorMsg.display = !this.errorMsg.display;
        }
    };
    MessageService.prototype.clearMessages = function () {
        this.successMsg.display = false;
        this.cautionMsg.display = false;
        this.errorMsg.display = false;
    };
    MessageService.prototype.clearMessage = function (type) {
        if (type == "success") {
            this.successMsg.display = false;
        }
        else if (type == "caution") {
            this.cautionMsg.display = false;
        }
        else if (type == "error") {
            this.errorMsg.display = false;
        }
    };
    return MessageService;
}());
MessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map