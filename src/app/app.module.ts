import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { MonthSelectorComponent } from './components/month-selector/month-selector.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { calendarReducer } from './reducers/calendar.reducer';
import { ModalRemindersComponent } from './components/modal-reminders/modal-reminders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MonthViewComponent,
    MonthSelectorComponent,
    DayViewComponent,
    CalendarViewComponent,
    ModalRemindersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot({date: calendarReducer})
  ],
  exports: [ModalRemindersComponent],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalRemindersComponent]
})
export class AppModule { }
