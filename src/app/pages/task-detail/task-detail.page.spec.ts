import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDetailPage } from './task-detail.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TaskDetailPage', () => {
  let component: TaskDetailPage;
  let fixture: ComponentFixture<TaskDetailPage>;

  beforeEach((() => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => '2'
        }
      },
      paramMap: of({ get: () => '2' })
    };

    TestBed.configureTestingModule({
      declarations: [TaskDetailPage],
      imports: [IonicModule.forRoot(), HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(TaskDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
