import * as moment from 'moment';

export class ReminderModel {
    public id?: number;
    public day: number;
    public year: number;
    public month: number;
    public date: string;
    public reminder: string;
    public city: string;
    public color: string;
}
