import { Component } from "@angular/core";
import {Reservation} from "../objects/reservation";

@Component({
    selector: 'schedule',
    templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
    private reservations : Reservation[];

    constructor() {
        this.reservations = [];
        for(var i = 0; i < 5; i++) {
            this.reservations.push(new Reservation());
        }
    }
}
