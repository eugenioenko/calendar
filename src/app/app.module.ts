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

@NgModule({
  declarations: [
    AppComponent,
    MonthViewComponent,
    MonthSelectorComponent,
    DayViewComponent,
    CalendarViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({date: calendarReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
