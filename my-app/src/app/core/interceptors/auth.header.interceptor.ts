import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

//    let isAuthenticted: boolean = false;

    if (this.authService.isAuthenticted()) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.authService.getAuthToken()}`}
      });
      console.log(JSON.stringify(request.headers));
    }


    // .subscribe(isAuth => isAuthenticted = isAuth);
    // if (isAuthenticted) {
    //   request = request.clone({
    //     setHeaders: { Authorization: `Bearer ${this.authService.token$.value}` }
    //   });

    // }

    return next.handle(request);

    // return next.handle(request).do((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //       console.log('Received http response....');
    //   }
    // }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 401) {
    //       console.log(`Received http response error:: ${err.status}: ${err.message}`);
    //     }
    //   }
    // });
}
}
