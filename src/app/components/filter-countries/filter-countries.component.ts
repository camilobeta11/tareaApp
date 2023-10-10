import { Component, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { CountriesService } from 'src/app/services/countries.service';
import { ICountry } from '../../interfaces/interface';

@Component({
  selector: 'app-filter-countries',
  templateUrl: './filter-countries.component.html',
  styleUrls: ['./filter-countries.component.scss'],
})
export class FilterCountriesComponent  implements OnInit {

  unsubscribe$: Subject<void> = new Subject<void>();
  filteredCountries: ICountry[] = [];
  countries: ICountry[] = [];
  countryFilter: string = '';

  constructor(
    private countriesService: CountriesService
  ) { }

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

  filterCountries() {
    const filterText = this.countryFilter.toLowerCase();
    this.filteredCountries = this.countries.filter((country) =>
      country.name.common.toLowerCase().includes(filterText)
    );
  }

}
