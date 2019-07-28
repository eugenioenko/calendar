import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { MonthSelectorComponent } from './components/month-selector/month-selector.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { ModalRemindersComponent } from './components/modal-reminders/modal-reminders.component';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { Store } from '@ngrx/store';
import { MockStore } from './mock/mock-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalendarViewComponent,
        MonthSelectorComponent,
        DayViewComponent,
        ModalRemindersComponent,
        MonthViewComponent
      ],
      providers: [{provide: Store, useClass: MockStore}],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
