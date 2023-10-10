import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = environment.apiCountries;

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
