import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { NavController } from '@ionic/angular';

import { Observable, map } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
    ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().pipe(map((authenticated: any) => {
      if (authenticated) {
        return true;
      } else {
        this.navCtrl.navigateRoot('/login')
        return false;
      }
    }));
  }
}
