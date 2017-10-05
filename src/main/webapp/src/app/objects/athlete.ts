import {User} from "./user";
import {AthleticTrainer} from "./athleticTrainer";

export class Athlete {
    user : User;
    firstName : string;
    lastName : string;
    sport : string;
    preferredAT : AthleticTrainer;

    constructor() {
        this.user = new User();
        this.firstName = "";
        this.lastName = "";
        this.sport = "";
        this.preferredAT = new AthleticTrainer();
    }
}
