import {Component, OnInit} from "@angular/core";
import {Reservation} from "../objects/reservation";
import {TimeSlot} from "../objects/timeSlot";
import {LoginService} from "../login/login.service";
import {ScheduleService} from "./schedule.service";
import {AthleticTrainer} from "../objects/athleticTrainer";

@Component({
    selector: 'schedule',
    providers : [ScheduleService],
    templateUrl: './schedule.component.html'
})
export class ScheduleComponent implements OnInit {

    private reservations : Reservation[];
    private times : TimeSlot[];
    private athleticTrainers : AthleticTrainer[];

    public selectedDay : string;
    public selectedTimeSlot : string;
    public selectedAT : string;
    public currentReservation : Reservation;

    private days : string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    private timesList : string[] = [];
    private atList : string[] = [];

    constructor(private loginService : LoginService, private scheduleService : ScheduleService) {
        this.reservations = [];
        this.currentReservation = new Reservation();
        this.selectedDay = this.days[0];

        for(var i = 0; i < 5; i++) {
            var reservation : Reservation = new Reservation();

            reservation.athlete.user.firstName = "David";
            reservation.athleticTrainer.user.firstName = "Ching";
            this.reservations.push(reservation);
        }
    }

    ngOnInit() {
        this.scheduleService.getTimes().then(response => {
            this.times = response;
            for (let time of this.times) {
                this.timesList.push(time.startTime + " - " + time.endTime);
            }
            this.selectedTimeSlot = this.timesList[0];
        });
        this.scheduleService.getATs().then(response => {
            this.athleticTrainers = response;
            for (let at of this.athleticTrainers) {
                this.atList.push(at.user.firstName + " " + at.user.lastName + " - " + at.classification);
            }
            this.selectedAT = this.atList[0];
        });
    }

    public reserve() : void {
        this.currentReservation.athlete = this.loginService.activeAthlete;
        this.currentReservation.athleticTrainer = this.athleticTrainers[this.atList.indexOf(this.selectedAT)];
        this.currentReservation.timeSlot = this.times[this.timesList.indexOf(this.selectedTimeSlot)];

        let today: Date = new Date();
        let day: number = this.days.indexOf(this.selectedDay) + 1;
        // The list does not include Sunday, so we increment by 1 to get Monday and on.
        if (day < today.getDay()) {
            this.currentReservation.scheduledDate.setDate(today.getDate() + day + 1);
            // Since the selected day occurs in the next week, we need to add 1 to represent the Saturday that is not in the list of days.
        } else if (day > today.getDay()) {
            this.currentReservation.scheduledDate.setDate(today.getDate() + day);
        } else {
            this.currentReservation.scheduledDate.setDate(today.getDate() + 7);
        }

        this.scheduleService.reserve(this.currentReservation).then(reservation => {
                if (reservation) {
                    console.log("Success");
                } else {
                    // TODO: Error in post. Notify user.
                }
            }
        );
    }
}
