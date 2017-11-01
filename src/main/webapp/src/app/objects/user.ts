export class User {
    userId    : number;
    username  : string;
    password  : string;
    firstName : string;
    lastName : string;

    constructor() {
        this.userId = null;
        this.username = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
    }

    public getFullName() : string {
        return this.firstName + " " + this.lastName;
    }
}
