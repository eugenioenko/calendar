import { Component, Input } from '@angular/core';
import { State, Store, Action } from '@ngrx/store';
import { CalendarModel } from 'src/app/models/calendar.model';
@Component({
    selector: 'app-month-selector',
    templateUrl: './month-selector.component.html',
    styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent {
    @Input() public month: number;
    @Input() public year: number;

    constructor(private store: Store<CalendarModel>) { }

    public dateChanged(): void {
        this.store.dispatch({
            type: 'date_change',
            payload : {month: this.month, year: this.year}
        });
    }
}
