import {Injectable} from "@angular/core";
import {Athlete} from "../objects/athlete";
import {AthleticTrainer} from "../objects/athleticTrainer";
import {Reservation} from "../objects/reservation";
import {TimeSlot} from "../objects/timeSlot";
import {Http, RequestOptions, Headers} from "@angular/http";
import {LoginService} from "../login/login.service";

@Injectable()
export class ScheduleService {
    private scheduleUrl : string = "http://localhost:8080/schedule";

    constructor(private http : Http, private loginService : LoginService) {
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
        console.log(reservation);
        console.log(reservation.athlete.id);
        console.log(reservation.athleticTrainer.id);
        console.log(reservation.scheduledDate.toDateString());

        let myHeaders = new Headers();
        myHeaders.set("athleteID", reservation.athlete.id + "");
        myHeaders.set("atID", reservation.athleticTrainer.id + "");
        myHeaders.set("timeslotID", reservation.timeSlot.id + "");
        myHeaders.set("scheduleDate", reservation.scheduledDate.toDateString());
        let options = new RequestOptions({headers : myHeaders});

        console.log(myHeaders);

        return this.http.get(this.scheduleUrl + "/reservation", options)
            .toPromise()
            .then(response => {
                console.log(response);
                return response.json() as Boolean;
            })
            .catch(err => this.handleError(err));
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