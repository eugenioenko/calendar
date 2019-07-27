import { Injectable } from '@angular/core';
import { ReminderModel } from '../models/reminder.model';
import { Store } from '@ngrx/store';
import { CalendarModel } from '../models/calendar.model';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    private reminders: ReminderModel[];

    constructor(private store: Store<{calendar: CalendarModel}>) {
        this.store.subscribe(res => {
            this.reminders = res.calendar.reminders;
        });
     }

    private validReminder(reminder: ReminderModel): boolean {
        if (reminder.reminder.length > 30) {
            return false;
        }
        return true;
    }

    public addReminder(reminder: ReminderModel): ReminderModel {
        if (!this.validReminder(reminder)) {
            return null;
        }
        this.store.dispatch({
            type: 'add_reminder',
            payload: reminder
        });
        return reminder;
    }

    public getReminder(reminderId: number): ReminderModel {
        return this.reminders.find(reminder => reminder.id === reminderId);
    }

    public updateReminder(reminderId: number, reminder: ReminderModel): ReminderModel {
        if (!this.validReminder(reminder)) {
            return null;
        }
        reminder.id = reminderId;
        this.store.dispatch({
            type: 'update_reminder',
            payload: reminder
        });
        return reminder;
    }

    public deleteReminder(reminderId: number): void {
        this.store.dispatch({
            type: 'delete_reminder',
            payload: reminderId
        });
    }
}
