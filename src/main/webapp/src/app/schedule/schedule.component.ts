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
    public selectedTimeSlot : TimeSlot;
    public selectedAT : AthleticTrainer;
    public date : Date;
    public currentReservation : Reservation;

    private days : string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    constructor(private loginService : LoginService, private scheduleService : ScheduleService) {
        this.reservations = [];
        this.currentReservation = new Reservation();
        this.date = new Date();
        this.selectedDay = "Tuesday";
        this.selectedTimeSlot = new TimeSlot();
        this.selectedAT = new AthleticTrainer();

        for(var i = 0; i < 5; i++) {
            var reservation : Reservation = new Reservation();

            reservation.athlete.user.firstName = "David";
            reservation.athleticTrainer.user.firstName = "Ching";
            this.reservations.push(reservation);
        }


        //testing dates
        // TODO: add this to the reserve button
        let test : Date = new Date();
        let day : number = this.days.indexOf(this.selectedDay) + 1;
        console.log(test);
        console.log("Current Day: " + test.getDay());
        console.log("Selected Day: " + this.selectedDay + " Index: " + day);
        if (day < test.getDay()) {
            test.setDate(test.getDate() + (day) + 1)
            console.log(test);
        }
    }

    ngOnInit() {
        this.scheduleService.getTimes().then(response => {this.times = response;});
        this.scheduleService.getATs().then(response => {this.athleticTrainers = response;});
    }

    public selectTime() : void {

    }

    public reserve() : void {
        this.currentReservation.athlete.id = this.loginService.activeUser.userId;
        this.currentReservation.athleticTrainer = this.selectedAT;
        this.currentReservation.timeSlot = this.selectedTimeSlot;
        /*this.currentReservation.scheduledDate.;*/
        /*this.scheduleService.reserve();*/
    }
}
