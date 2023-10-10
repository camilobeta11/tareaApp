import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterCountriesComponent } from './filter-countries.component';
import { HttpClientModule } from '@angular/common/http';

describe('FilterCountriesComponent', () => {
  let component: FilterCountriesComponent;
  let fixture: ComponentFixture<FilterCountriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCountriesComponent ],
      imports: [IonicModule.forRoot(), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
