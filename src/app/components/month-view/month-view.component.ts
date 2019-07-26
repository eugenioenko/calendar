import { Component, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-month-view',
    templateUrl: './month-view.component.html',
    styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnChanges {
    @Input() public month: number;
    @Input() public year: number;
    public calendar: Array<Array<moment.Moment>> = [];
    public readonly weeksToDisplay = 5;
    constructor() { }

    public ngOnChanges(): void {
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

}
