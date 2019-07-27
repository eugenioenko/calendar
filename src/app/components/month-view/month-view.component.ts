import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { CalendarModel } from 'src/app/models/calendar.model';
import { ReminderModel } from 'src/app/models/reminder.model';

@Component({
    selector: 'app-month-view',
    templateUrl: './month-view.component.html',
    styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {
    public month: number;
    public year: number;
    public calendar: Array<Array<moment.Moment>> = [];
    public reminders: ReminderModel[];
    public readonly weeksToDisplay = 5;

    constructor(private store: Store<{calendar: CalendarModel}>) { }

    public ngOnInit(): void {
        this.store.subscribe(res => {
            this.month = res.calendar.month;
            this.year = res.calendar.year;
            this.reminders = res.calendar.reminders;
            this.updateCalendar();
        });
    }

    public updateCalendar(): void {
        this.calendar = [];
        const date = moment([this.year, this.month]);
        const startWeek = date.startOf('month').week();
        const endWeek = startWeek + this.weeksToDisplay;
        for (let week = startWeek; week < endWeek; ++week) {
            this.calendar.push(
                Array(7).fill(0).map(
                    (n, dayOfWeek) => moment([this.year])
                        .week(week)
                        .startOf('week')
                        .add(dayOfWeek, 'day')
                )
            );
        }
    }

    public getReminders(date: moment.Moment): ReminderModel[] {
        const day = date.date();
        const month = date.month();
        const year = date.year();
        return this.reminders
            .filter(reminder => reminder.day === day)
            .filter(reminder => reminder.month === month)
            .filter(reminder => reminder.year === year)
            .sort((a, b) => new Date(a.date).getTime() -  new Date(b.date).getTime());
    }

}
