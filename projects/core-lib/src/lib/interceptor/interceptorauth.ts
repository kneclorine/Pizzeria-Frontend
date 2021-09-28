import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { UserDTO } from "../user/userDTO";
import userStorage from "../user/userStorage";
import { DecoratorService } from "./decoratorservice";
import  IndexeddbService  from "../services/indexeddb.service";

@Injectable({ providedIn: 'root' })
export class HttpInterceptorAuth implements HttpInterceptor {
    constructor(){
    }
    private async setAuthorization(req: HttpRequest<any>): Promise<HttpRequest<any>> {
        const userDTO: UserDTO = await IndexeddbService.getItem('TokenDB','User','user').then();
        return req.clone({ setHeaders: { 'Authorization': `${userDTO.type} ${userDTO.token}` } });
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const autorizationObserver = DecoratorService.getAuthorizationObserver();
        if (autorizationObserver.addToken) {
            let modified = null;
            modified =(async ()=>await this.setAuthorization(req));
            autorizationObserver.addToken = false;
            //TODO: descomentar
            return next.handle(/*modified*/req);
        }
        return next.handle(req);
    }
}