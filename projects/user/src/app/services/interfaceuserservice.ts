import { UserDTO } from "core-lib";
import { Observable } from "rxjs/internal/Observable";
import { UserLogin } from "../logininterface";
import { User } from "../userinterface";

export interface IUserService {

    addUser(body: User|null):Observable<UserDTO>;
    login(body:UserLogin):Observable<UserDTO>;
}