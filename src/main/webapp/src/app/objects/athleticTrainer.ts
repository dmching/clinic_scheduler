import {User} from "./user";

export class AthleticTrainer {
    user : User;
    firstName : string;
    lastName : string;
    type : string;
    primarySport : string;

    constructor() {
        this.user = new User();
        this.firstName = "";
        this.lastName = "";
        this.type = "";
        this.primarySport = "";
    }
}
