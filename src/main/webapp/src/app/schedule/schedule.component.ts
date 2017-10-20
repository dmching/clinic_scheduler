import { Component } from "@angular/core";
import {Reservation} from "../objects/reservation";
import {TimeSlot} from "../objects/timeSlot";

@Component({
    selector: 'schedule',
    templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
    private reservations : Reservation[];
    private times : TimeSlot[];

    constructor() {
        this.reservations = [];
        this.times = [];
        for(var i = 0; i < 5; i++) {
            var reservation : Reservation = new Reservation();
            var time : TimeSlot = new TimeSlot();

            reservation.athlete.user.firstName = "David";
            reservation.athleticTrainer.user.firstName = "Ching";
            this.reservations.push(reservation);

            time.start_time = i;
            time.end_time = i + .5;
            this.times.push(time);
        }
    }

    selectTime() {

    }
}
