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
            payload.id = state.autoincrement;
            state.autoincrement += 1;
            state.reminders.push(payload);
            break;
        case 'update_reminder':
            const updateIndex = state.reminders.findIndex(reminder => reminder.id === payload.id);
            if (updateIndex !== -1) {
                state.reminders[updateIndex] = payload;
            }
            break;
        case 'delete_reminder':
            const reminderId = payload;
            const deleteIndex = state.reminders.findIndex(reminder => reminder.id === reminderId);
            if (deleteIndex !== -1) {
                state.reminders.splice(deleteIndex, 1);
            }
            break;
    }
    localStorage.setItem('calendar', JSON.stringify(state));
    return state;
};
