import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewComponent } from './calendar-view.component';
import { MonthViewComponent } from '../month-view/month-view.component';
import { MonthSelectorComponent } from '../month-selector/month-selector.component';
import { DayViewComponent } from '../day-view/day-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { MockStore } from 'src/app/mock/mock-store';

describe('CalendarViewComponent', () => {
  let component: CalendarViewComponent;
  let fixture: ComponentFixture<CalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarViewComponent, MonthViewComponent, MonthSelectorComponent, DayViewComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule
      ],
      providers: [{provide: Store, useClass: MockStore}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
