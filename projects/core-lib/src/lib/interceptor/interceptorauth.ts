import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DecoratorService } from "./decoratorservice";
@Injectable({ providedIn: 'root' })
export class HttpInterceptorAuth implements HttpInterceptor {    
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const autorizationObserver = DecoratorService.getAuthorizationObserver();
        if (autorizationObserver.addToken) {
                const token: string|null = localStorage.getItem('token');
                if(token){
                    const modified = req.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } });
                    autorizationObserver.addToken = false;
                    return next.handle(modified);          
                }
                
        }
        return next.handle(req);
    }
}