import {Injectable} from "@angular/core";
import {User} from "../objects/user";
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    private userUrl : string = "http://localhost:8080/user/login";
    private activeUser : User;
    private athlete : boolean;
    private athleticTrainer : boolean;
    private loggedIn : boolean;

    constructor(private http : Http) {
        this.activeUser = new User();
        this.loggedIn = false;
        this.athlete = false;
        this.athleticTrainer = false;
    }

    public login(username : string, password : string) : Promise<User> {
        let myHeaders = new Headers();
        myHeaders.set('username', username);
        myHeaders.set('password', password);
        let options = new RequestOptions({headers: myHeaders});
        return this.http.get(this.userUrl, options)
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
                console.log(response);
                return response.json() as User[];
            })
            .catch(err => this.handleError(err));
    }

    public handleError(error : any) : Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}
