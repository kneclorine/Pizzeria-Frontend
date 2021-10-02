import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { UserDTO } from "../user/userDTO";
import { DecoratorService } from "./decoratorservice";
import { IndexeddbService } from "../services/indexeddb.service";
import { from } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HttpInterceptorAuth implements HttpInterceptor {
    constructor(private indexeddbService: IndexeddbService){
    }
    private async setAuthorization(req: HttpRequest<any>) : Promise<HttpRequest<any>>{
        const userDTO: UserDTO = await this.indexeddbService.getUser();
        return req.clone({ setHeaders: { 'Authorization': `${userDTO.type} ${userDTO.token}` } });
    }
    
     intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {    
        const autorizationObserver = DecoratorService.getAuthorizationObserver();
        if (autorizationObserver.addToken) {
            let modified;
            modified =this.setAuthorization(req)
            autorizationObserver.addToken = false;
            return from(this.reqPromise(req, next));
        }
        return next.handle(req);
    }
    private async reqPromise(req: HttpRequest<any>, next: HttpHandler):
    Promise<HttpEvent<any>>{
        let modified;
        modified =await this.setAuthorization(req);
        return next.handle(modified).toPromise();
    }
}