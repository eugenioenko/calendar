import { ReminderModel } from './reminder.model';
import * as moment from 'moment';

export class CalendarModel {
    public year: number;
    public month: number;
    public reminders: ReminderModel[];

    constructor() {
        this.month = moment().month();
        this.year = moment().year();
        this.reminders = [];
    }

}
