import { Component, Input, OnInit } from '@angular/core';
import { State, Store, Action } from '@ngrx/store';
import { CalendarModel } from 'src/app/models/calendar.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRemindersComponent } from '../modal-reminders/modal-reminders.component';
import { CalendarService } from 'src/app/services/calendar.service';
import { ReminderModel } from 'src/app/models/reminder.model';
@Component({
    selector: 'app-month-selector',
    templateUrl: './month-selector.component.html',
    styleUrls: ['./month-selector.component.scss']
})
export class MonthSelectorComponent implements OnInit {
    public month: number;
    public year: number;
    public months = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'Dicember'];

    constructor(
        private modalService: NgbModal,
        private store: Store<{calendar: CalendarModel}>,
        private calendarService: CalendarService
    ) { }

    public ngOnInit(): void {
        this.store.subscribe(res => {
            this.month = res.calendar.month;
            this.year = res.calendar.year;
        });
    }

    public dateChanged(): void {
        this.store.dispatch({
            type: 'date_change',
            payload : {month: this.month, year: this.year}
        });
    }

    public newReminder(): void {
        // const modalRef = this.modalService.open(ModalRemindersComponent);

        this.calendarService.addReminder({
            day: 27,
            year: 2019,
            month: 6,
            date: new Date().toISOString(),
            reminder: 'test',
            city: 'a',
            color: 'red'
        });
    }
}
