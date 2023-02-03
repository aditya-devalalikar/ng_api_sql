import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log("You are in the Interceptor");

    const modifiedReq = request.clone({
      setHeaders: {
        'Header': 'new header value'
      }
    });

    return next.handle(modifiedReq);
  }
}
