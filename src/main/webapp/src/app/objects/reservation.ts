import {Athlete} from "./athlete";
import {AthleticTrainer} from "./athleticTrainer";
import {TimeSlot} from "./timeSlot";

export class Reservation {
    id : number;
    athlete : Athlete;
    athleticTrainer : AthleticTrainer;
    timeSlot : TimeSlot;

    constructor() {
        this.id = -1;
        this.athlete = new Athlete();
        this.athleticTrainer = new AthleticTrainer();
        this.timeSlot = new TimeSlot();
    }
}