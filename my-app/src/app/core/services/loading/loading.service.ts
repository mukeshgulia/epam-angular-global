import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loading$ = new BehaviorSubject<boolean>(false);

  constructor() {
   //  this.loading$.next(true);
  }

  public delay(ms: number): Promise<unknown> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
