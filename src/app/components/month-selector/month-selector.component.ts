import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRemindersComponent } from '../modal-reminders/modal-reminders.component';
import { AppStore } from 'src/app/models/app.store';

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
        private store: Store<AppStore>
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
        const modalRef = this.modalService.open(ModalRemindersComponent);
    }
}
