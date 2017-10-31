
export class TimeSlot {
    id : number;
    startTime : string;
    endTime : string;

    constructor() {
        this.id = -1;
        this.startTime = "00:00AM";
        this.endTime = "00:00AM";
    }
}