import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { ReminderModel } from 'src/app/models/reminder.model';
import { ModalRemindersComponent } from '../modal-reminders/modal-reminders.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent {
    @Input() public date: moment.Moment;
    @Input() public month: number;
    @Input() public year: number;
    @Input() public weekend: boolean;
    @Input() public reminders: ReminderModel[];

    constructor(private modalService: NgbModal) { }

    public addReminder(): void {
        const modalRef = this.modalService.open(ModalRemindersComponent);
        modalRef.componentInstance.date = this.date;
    }

    public viewReminder(id: number): void {
        const modalRef = this.modalService.open(ModalRemindersComponent);
        modalRef.componentInstance.reminderId = id;
    }
}
