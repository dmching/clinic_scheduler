import {Injectable} from "@angular/core";
import {Athlete} from "../objects/athlete";
import {AthleticTrainer} from "../objects/athleticTrainer";
import {Reservation} from "../objects/reservation";

@Injectable
export class ScheduleService {

    constructor() {}

    public reserve() : void {
        // Reserve the time and day from the schedule screen.
        // This method is only accessable to athletes.
    }

    public getReservations() : Reservation[]{
        // Returns the reservations for the current day, for all AT staff.
        return null;
    }

    public getAthleticTrainerWork(athleticTrainer : AthleticTrainer) : Reservation[] {
        // Return all reservations that connect to a specific athletic trainer.
        return null;
    }

    public getAthleteHistory(athlete : Athlete) : Reservation[] {
        // Returns every reservation made by an athlete, from newest to oldest.
        return null;
    }


}