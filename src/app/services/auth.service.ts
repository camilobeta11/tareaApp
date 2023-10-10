import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginForm } from 'src/app/interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    const storedAuthState = localStorage.getItem('authState');
    if (storedAuthState) {
      const isAuth = JSON.parse(storedAuthState);
      this.isAuthenticatedSubject.next(isAuth);
    }
  }

  login(login: ILoginForm): Observable<boolean> {
    if (
      login.username === 'usertest' &&
      login.password === '123456' &&
      login.country == 'Brazil'
    ) {
      this.isAuthenticatedSubject.next(true);
      localStorage.setItem('authState', JSON.stringify(true));
      return new Observable<boolean>((observer) => {
        setTimeout(() => {
          observer.next(true);
          observer.complete();
        }, 1000);
      });
    } else {
      this.isAuthenticatedSubject.next(false);
      localStorage.setItem('authState', JSON.stringify(false));
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
    localStorage.removeItem('authState');
  }
}
