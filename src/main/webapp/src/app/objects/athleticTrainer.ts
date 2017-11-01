import {User} from "./user";

export class AthleticTrainer {
    id : number;
    user : User;
    classification : string;
    primarySport : string;

    constructor() {
        this.id
        this.user = new User();
        this.classification = "";
        this.primarySport = "";
    }

    getFullTitle() : string {
        return this.user.firstName + " " + this.user.lastName + " - " + this.classification;
    }
}
