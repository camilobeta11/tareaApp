import { Injectable } from '@angular/core'
;
import { BehaviorSubject, Observable } from 'rxjs';

import { ILoginForm } from 'src/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  login(login: ILoginForm): Observable<boolean> {
    if (login.username === 'usertest' && login.password === '123456' && login.country == 'Brazil') {
      this.isAuthenticatedSubject.next(true);
      return new Observable<boolean>((observer) => {
        setTimeout(() => {
          observer.next(true);
          observer.complete();
        }, 1000);
      });
    } else {
      this.isAuthenticatedSubject.next(false);
      return new Observable<boolean>((observer) => {
        setTimeout(() => {
          observer.next(false);
          observer.complete();
        }, 1000);
      });
    }
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
