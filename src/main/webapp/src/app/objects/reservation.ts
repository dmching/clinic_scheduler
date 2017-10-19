import {Athlete} from "./athlete";
import {AthleticTrainer} from "./athleticTrainer";

export class Reservation {
    id : number;
    athlete : Athlete;
    athleticTrainer : AthleticTrainer;
    date : Date;

    constructor() {
        this.id = -1;
        this.athlete = new Athlete();
        this.athleticTrainer = new AthleticTrainer();
        this.date = new Date();
    }
}