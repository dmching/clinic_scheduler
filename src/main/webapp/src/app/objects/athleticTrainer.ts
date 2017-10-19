import {User} from "./user";

export class AthleticTrainer {
    id : number;
    user : User;
    type : string;
    primarySport : string;

    constructor() {
        this.id
        this.user = new User();
        this.type = "";
        this.primarySport = "";
    }
}
