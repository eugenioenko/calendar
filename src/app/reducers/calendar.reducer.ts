import { CalendarModel } from '../models/calendar.model';

const stored = localStorage.getItem('calendar');
let initial: CalendarModel;
if (initial !== null) {
    try {
        initial = JSON.parse(stored);
    } catch (error) {
        initial = null;
    }
}
if (initial === null) {
    initial = new CalendarModel();
}

export const calendarReducer = (state: CalendarModel = initial, {type, payload}) => {
    switch (type) {
        case 'date_change':
            state.month = payload.month;
            state.year = payload.year;
            break;
        case 'add_reminder':
            state.reminders.push(payload);
            break;
    }
    localStorage.setItem('calendar', JSON.stringify(state));
    return state;
};
