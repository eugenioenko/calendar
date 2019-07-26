import { Component, Input } from '@angular/core';
import { State, Store, Action } from '@ngrx/store';
import { CalendarModel } from 'src/app/models/calendar.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRemindersComponent } from '../modal-reminders/modal-reminders.component';
@Component({
    selector: 'app-month-selector',
    templateUrl: './month-selector.component.html',
    styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent {
    @Input() public month: number;
    @Input() public year: number;
    public months = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'Dicember'];

    constructor(
        private modalService: NgbModal,
        private store: Store<CalendarModel>
    ) { }

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
