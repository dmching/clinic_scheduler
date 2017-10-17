import {Injectable} from "@angular/core";
import {User} from "../objects/user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    private userUrl : string = "/user/login";

    constructor(private http : Http) {}

    getUser(firstName : string, lastName : string) : Promise<User> {
        const url = this.userUrl + '/$' + firstName + '/$' + lastName;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json().data as User;
            })
            .catch(err => {return this.handleError(err)});
    }

    private handleError(error : any) : Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}
