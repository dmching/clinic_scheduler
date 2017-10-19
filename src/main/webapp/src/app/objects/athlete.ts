import {User} from "./user";
import {AthleticTrainer} from "./athleticTrainer";

export class Athlete {
    id : number;
    user : User;
    sport : string;
    preferredAT : AthleticTrainer;

    constructor() {
        this.id = -1;
        this.user = new User();
        this.sport = "";
        this.preferredAT = new AthleticTrainer();
    }
}
