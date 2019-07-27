import { Injectable } from '@angular/core';
import { ReminderModel } from '../models/reminder.model';
import { Store } from '@ngrx/store';
import { CalendarModel } from '../models/calendar.model';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    constructor(private store: Store<CalendarModel>) { }

    public addReminder(reminder: ReminderModel): void {
        this.store.dispatch({
            type: 'add_reminder',
            payload: reminder
        });
    }

    public getReminder(year: number, month: number, day: number): void {

    }
}
