import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterCountriesComponent } from './filter-countries/filter-countries.component';


@NgModule({
  declarations: [
    FilterCountriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    FilterCountriesComponent
  ]
})
export class ComponentsModule { }
