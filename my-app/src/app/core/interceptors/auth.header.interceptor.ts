import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { authToken } from '../store/app.state';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor( private store: Store<AppState>) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.store.select(authToken)
    .pipe(
      take(1),
      map(token => {
        if (token) {
          return request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          }
          );
        } else {
          return request;
        }
      }),
      switchMap(req => next.handle(req))
    );
  }
}
