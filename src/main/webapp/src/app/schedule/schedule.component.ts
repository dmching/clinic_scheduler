import {Component, OnInit} from "@angular/core";
import {Reservation} from "../objects/reservation";
import {TimeSlot} from "../objects/timeSlot";
import {LoginService} from "../login/login.service";
import {ScheduleService} from "./schedule.service";
import {AthleticTrainer} from "../objects/athleticTrainer";
import {MessageService} from "../message/message.service";

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

    constructor(private loginService : LoginService, private scheduleService : ScheduleService,
                private messageService : MessageService) {
        this.reservations = [];
        this.currentReservation = new Reservation();
        this.selectedDay = this.days[0];
    }

    ngOnInit() {
        if (this.loginService.isLoggedIn()) {
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

            if (this.loginService.isAthlete) {
                // Athlete viewing the schedule.
                this.scheduleService.getAthleteHistory(this.loginService.activeAthlete)
                    .then(response => {
                        this.reservations = response;
                        if (this.reservations[0].id == -1) {
                            // No rows in the DB.
                            this.messageService.cautionMsg.display = true;
                            this.messageService.cautionMsg.heading = "No Results Found";
                            this.messageService.cautionMsg.body = "You currently have no reservations or appointment history connected to your account.";
                        }
                    });
            } else {
                // Athletic Trainer viewing the list.
                this.scheduleService.getAthleticTrainerWork(this.loginService.activeAT)
                    .then(response => {
                        this.reservations = response;
                        if (this.reservations[0].id == -1) {
                            // No rows in the DB.
                            this.messageService.cautionMsg.display = true;
                            this.messageService.cautionMsg.heading = "No Results Found";
                            this.messageService.cautionMsg.body = "You currently have no reservations or appointment history connected to your account.";
                        }
                    });
            }
        }
    }

    public reserve() : void {
        this.currentReservation.athlete = this.loginService.activeAthlete;
        this.currentReservation.athleticTrainer = this.athleticTrainers[this.atList.indexOf(this.selectedAT)];
        this.currentReservation.timeSlot = this.times[this.timesList.indexOf(this.selectedTimeSlot)];

        let today: Date = new Date();
        let day: number = this.days.indexOf(this.selectedDay) + 1;
        // The list does not include Sunday, so we increment by 1 to get Monday and on.
        if (day < today.getDay()) {
            today.setDate(7 + today.getDate() - (today.getDay() - day));
            // Since the selected day occurs in the next week, we need to add 1 to represent the Saturday that is not in the list of days.
        } else if (day > today.getDay()) {
            today.setDate(today.getDate() + (day - today.getDay()));
        } else {
            today.setDate(today.getDate() + 7);
        }
        console.log("Today was modified: " + today.getDate());
        this.currentReservation.scheduledDate = (today.toDateString());

        this.scheduleService.reserve(this.currentReservation).then(reservation => {
                if (reservation) {
                    this.reservations.push(this.currentReservation);
                } else {
                    // TODO: Error in post. Notify user.
                    this.messageService.errorMsg.display = true;
                    this.messageService.errorMsg.heading = "Failed to Reserve:";
                    this.messageService.errorMsg.body = "An appointment with the given details already exists. " +
                        "Please choose another day, or preferred Athletic Trainer, and try again.";
                }
            }
        );
    }
}
