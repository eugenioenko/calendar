import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import * as moment from 'moment';

@Component({
    selector: 'app-calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.scss']
})

export class CalendarViewComponent implements OnInit {
    public month = moment().month();
    public year = moment().year();

    constructor(private store: Store<any>) { }

    public ngOnInit() {
        this.store.subscribe(res => {
            this.month = res.date.month;
            this.year = res.date.year;
        });
    }

}
