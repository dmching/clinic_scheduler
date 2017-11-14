import {Injectable} from "@angular/core";
import {User} from "../objects/user";
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {AthleticTrainer} from "../objects/athleticTrainer";
import {Athlete} from "../objects/athlete";
import {Router} from "@angular/router";

@Injectable()
export class LoginService {
    private userUrl : string = "http://localhost:8080/user/login";
    private loggedIn : boolean;

    public currentDate : Date = new Date();

    // Either an Athlete or an Athletic Trainer
    public activeAthlete : Athlete;
    public activeAT : AthleticTrainer;
    public isAthlete : boolean;

    constructor(private http : Http, private router : Router) {
        this.activeAthlete = new Athlete();
        this.activeAT = new AthleticTrainer();
        this.loggedIn = false;
    }

    public athleteLogin(username : string, password : string) : Promise<Athlete> {
        let myHeaders = new Headers();
        myHeaders.set('username', username);
        myHeaders.set('password', password);
        let options = new RequestOptions({headers: myHeaders});

        let url = this.userUrl + "/athlete";
        return this.http.get(url, options)
            .toPromise()
            .then(response => {
                console.log(response);
                this.activeAthlete = response.json() as Athlete;
                if (this.activeAthlete.id > 0) {
                    this.loggedIn = true;
                    this.isAthlete = true;
                    return this.activeAthlete;
                } else {
                    // Invalid Login.
                    this.loggedIn = false;
                    this.isAthlete = false;
                    return null;
                }
            })
            .catch(err => {return this.handleError(err)});
    }

    public athleticTrainerLogin(username : string, password : string) : Promise<AthleticTrainer> {
        let myHeaders = new Headers();
        myHeaders.set('username', username);
        myHeaders.set('password', password);
        let options = new RequestOptions({headers: myHeaders});

        let url = this.userUrl + "/at";
        return this.http.get(url, options)
            .toPromise()
            .then(response => {
                this.activeAT = response.json() as AthleticTrainer;
                this.isAthlete = false;
                if (this.activeAT.id > 0) {
                    this.loggedIn = true;
                    return this.activeAT;
                } else {
                    this.loggedIn = false;
                    return null;
                }
            })
            .catch(err => {return this.handleError(err)});
    }

    public logout() : void {
        this.loggedIn = false;
        this.isAthlete = false;
        this.router.navigate(['/dashboard']);
    }

    public isLoggedIn() : boolean {
        return this.loggedIn;
    }

    public getActiveUser() : string {
        if (this.isAthlete) {
            return this.activeAthlete.user.firstName + " " + this.activeAthlete.user.lastName;
        } else {
            return this.activeAT.user.firstName + " " + this.activeAT.user.lastName;
        }
    }

    // Used to test the Connection to DB.
    public getUsers() : Promise<User[]> {
        return this.http.get(this.userUrl + '/all')
            .toPromise()
            .then(response => {
                return response.json() as User[];
            })
            .catch(err => this.handleError(err));
    }

    public handleError(error : any) : Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}
