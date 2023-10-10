import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController, ToastController } from '@ionic/angular';

import { ICountry } from 'src/app/interfaces/interface';
import { AuthService } from 'src/app/services/auth.service';
import { CountriesService } from 'src/app/services/countries.service';

import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  unsubscribe$: Subject<void> = new Subject<void>();
  loginForm!: FormGroup;
  countries: ICountry[] = [];
  invalidForm = false;

  constructor(
    private authService: AuthService,
    private countriesService: CountriesService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.dataForm();
  }

  dataForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.getCountries();
  }

  ngOnDestroy(): void {
    if (this.unsubscribe$) {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  }

  getCountries() {
    this.countriesService.getCountries().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((countries) => {
      this.countries = countries;
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(resp => {
        if (resp) {
          this.navCtrl.navigateRoot('/task-list')
        } else {
          this.toast();
        }
      })
    } else {
      this.invalidForm = !this.invalidForm;
      setTimeout(() => {
        this.invalidForm = !this.invalidForm;
      }, 5000);
    }
  }

  async toast() {
    const toast = await this.toastCtrl.create({
      header: 'Usuario o contraseña incorrectos',
      mode: 'ios',
      position: 'bottom',
      cssClass: 'toast',
      duration: 5000,
    });
    toast.present();
  }


}
