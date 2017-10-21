import {Injectable} from "@angular/core";
import {User} from "../objects/user";
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    private userUrl : string = "/user/login";
    private activeUser : User;
    private athlete : boolean;
    private athleticTrainer : boolean;

    constructor(private http : Http) {
        this.activeUser = new User();

        /* Remove the following lines when back end is connected to front end.*/
        this.activeUser.firstName = "David";
        this.activeUser.lastName = "Ching";
        this.activeUser.userId = 1;
        this.athlete = true;
        this.athleticTrainer = true;
    }

    public getUser(username : string, password : string) : Promise<User> {
        let myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');
        let myParams = new URLSearchParams();
        myParams.set('username', username);
        myParams.set('password', password);
        let options = new RequestOptions({ headers: myHeaders, params: myParams });
        return this.http.get(this.userUrl, options)
            .toPromise()
            .then(response => {
                return response.json().data as User;
            })
            .catch(err => {return this.handleError(err)});
    }

    public getUsers() : Promise<Array<User>> {
        return this.http.get('http://localhost:8080/user/login/all')
            .toPromise()
            .then(response => {
                return response.json().data as User[];
            })
            .catch(err => this.handleError(err));
    }

    public loggedIn() : boolean {
        return this.activeUser.userId != null;
    }

    public isAthlete() : boolean {
        return this.athlete;
    }

    public isAthleticTrainer() : boolean {
        return this.athleticTrainer;
    }

    public canViewScheduler() : boolean {
        return this.loggedIn() && (this.isAthlete() || this.isAthleticTrainer());
    }

    public getUserFullName() : String {
        return this.activeUser.getFullName();
    }

    public logout() : void {
        this.activeUser = new User();
        /* Route to the login screen after logging out. */
    }

    public handleError(error : any) : Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}
