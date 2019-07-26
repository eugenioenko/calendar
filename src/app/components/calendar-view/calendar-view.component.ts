import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.css']
})

export class CalendarViewComponent implements OnInit {
    public month = moment().month();
    public year = moment().year();

    constructor() { }

    ngOnInit() {
    }

}
