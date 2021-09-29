import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const indicatorSubject = new BehaviorSubject<boolean>(false);

export const isLoading$ = indicatorSubject.asObservable().pipe(distinctUntilChanged());

@Injectable({
  providedIn: 'root',
})

export class LoadingService {
  
  show() {
    indicatorSubject.next(true);
  }
  
  hide() {
    indicatorSubject.next(false);
  }
  get isLoading$(): Observable<boolean> {
    return isLoading$;
  }

  
}