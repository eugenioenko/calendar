import { CalendarModel } from '../models/calendar.model';
import * as moment from 'moment';


const initial = new CalendarModel();
initial.month = moment().month();
initial.year = moment().year();
export const calendarReducer = (state: CalendarModel = initial, {type, payload}) => {
    switch (type) {
        case 'date_change':
            state.month = payload.month;
            state.year = payload.year;
            return state;
        default:
            return state;
    }
};
