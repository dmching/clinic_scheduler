import {Component, OnInit} from "@angular/core";
import {Reservation} from "../objects/reservation";
import {TimeSlot} from "../objects/timeSlot";
import {LoginService} from "../login/login.service";
import {ScheduleService} from "./schedule.service";

@Component({
    selector: 'schedule',
    providers : [ScheduleService],
    templateUrl: './schedule.component.html'
})
export class ScheduleComponent implements OnInit {
    private reservations : Reservation[];
    private times : TimeSlot[];

    private days : string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    constructor(private loginService : LoginService, private scheduleService : ScheduleService) {
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

    ngOnInit() {

    }

    public selectTime() : void {

    }

    public reserve() : void {
        this.scheduleService.reserve();
    }
}
