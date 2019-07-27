import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { ReminderModel } from 'src/app/models/reminder.model';

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
}
