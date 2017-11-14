import {Injectable} from "@angular/core";
import {Message} from "./message";

@Injectable()
export class MessageService {

    successMsg : Message;
    cautionMsg : Message;
    errorMsg   : Message;

    constructor() {
        this.successMsg = new Message();
        this.cautionMsg = new Message();
        this.errorMsg   = new Message();
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

    public toggle(type : string) : void {
        if (type == "success") {
            this.successMsg.display = !this.successMsg.display;
        } else if (type == "caution") {
            this.cautionMsg.display = !this.cautionMsg.display;
        } else if (type == "error") {
            this.errorMsg.display = !this.errorMsg.display;
        }
    }

    public clearMessages() : void {
        this.successMsg.display = false;
        this.cautionMsg.display = false;
        this.errorMsg.display = false;
    }

    public clearMessage(type : string) {
        if (type == "success") {
            this.successMsg.display = false;
        } else if (type == "caution") {
            this.cautionMsg.display = false;
        } else if (type == "error") {
            this.errorMsg.display = false;
        }
    }
}