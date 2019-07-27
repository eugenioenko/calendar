import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import * as moment from 'moment';
import { CalendarModel } from 'src/app/models/calendar.model';
import { ReminderModel } from 'src/app/models/reminder.model';

@Component({
    selector: 'app-calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.scss']
})

export class CalendarViewComponent implements OnInit {


    constructor(private store: Store<{calendar: CalendarModel}>) { }

    public ngOnInit() {

    }

}
