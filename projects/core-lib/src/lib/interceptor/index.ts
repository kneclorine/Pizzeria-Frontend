import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpInterceptorAuth } from './interceptorauth'
import {AuthDenied} from './interceptordenied'
import {InterceptorUnauthorized} from './interceptorunauthorized'
import {InterceptorError} from './interceptorerror'
import {InterceptorNotFound} from './interceptornotfound'
export const INTERCEPTORS =[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorAuth,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthDenied,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorUnauthorized,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorError,
        multi: true
      },   
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorNotFound,
        multi: true
      },
]