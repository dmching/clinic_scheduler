import {Injectable} from "@angular/core";
import {User} from "../objects/user";
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {AthleticTrainer} from "../objects/athleticTrainer";
import {Athlete} from "../objects/athlete";

@Injectable()
export class LoginService {
    private userUrl : string = "http://localhost:8080/user/login";
    private activeUser : User;
    private loggedIn : boolean;

    constructor(private http : Http) {
        this.activeUser = new User();
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
                this.loggedIn = true;
                return response.json() as User;
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
                this.loggedIn = true;
                return response.json() as User;
            })
            .catch(err => {return this.handleError(err)});
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
