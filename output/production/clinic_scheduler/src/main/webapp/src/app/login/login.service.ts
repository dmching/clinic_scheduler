import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {
    getUser() : Promise<string> {
        return Promise.resolve("Hit the service.");
    }
}