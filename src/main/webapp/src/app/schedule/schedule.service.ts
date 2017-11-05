import {Injectable} from "@angular/core";
import {Athlete} from "../objects/athlete";
import {AthleticTrainer} from "../objects/athleticTrainer";
import {Reservation} from "../objects/reservation";
import {TimeSlot} from "../objects/timeSlot";
import {Http} from "@angular/http";

@Injectable()
export class ScheduleService {
    private scheduleUrl : string = "http://localhost:8080/schedule";

    constructor(private http : Http) {
    }

    public getTimes() : Promise<TimeSlot[]> {
        return this.http.get(this.scheduleUrl + "/times")
            .toPromise()
            .then(response => {
                return response.json() as TimeSlot;
            })
            .catch(err => {
                return this.handleError(err);
            });
    }

    public getATs() : Promise<AthleticTrainer[]> {
        return this.http.get(this.scheduleUrl + "/ats")
            .toPromise()
            .then(response => {
                return response.json() as AthleticTrainer[];
            })
            .catch(err => this.handleError(err));
    }

    public reserve(reservation : Reservation) : Promise<boolean> {
        // Reserve the time and day from the schedule screen.
        // This method is only accessable to athletes.

        return null;
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

    public handleError(error : any) : Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}