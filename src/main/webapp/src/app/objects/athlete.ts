import {User} from "./user";
import {AthleticTrainer} from "./athleticTrainer";

export class Athlete {
    id : number;
    complaint : string;
    lastVisit : Date;
    primarySport : string;
    secondarySport : string;
    user : User;

    constructor() {
        this.id = null;
        this.complaint = "";
        // TODO: Format the date attribute for MM/DD/YYYY
        this.lastVisit = new Date();
        this.primarySport = "";
        this.secondarySport = "";
        this.user = new User();
    }
}
