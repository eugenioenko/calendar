import { TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar.service';
import { Store } from '@ngrx/store';
import { MockStore } from '../mock/mock-store';
import { ReminderModel } from '../models/reminder.model';

describe('CalendarService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [{ provide: Store, useClass: MockStore }]
    }));

    it('should be created', () => {
        const service: CalendarService = TestBed.get(CalendarService);
        expect(service).toBeTruthy();
    });

    it('should dispatch a valid reminder', () => {
        const service: CalendarService = TestBed.get(CalendarService);
        const reminder: ReminderModel = {
            day: 1,
            year: 2018,
            month: 1,
            date: new Date().toJSON(),
            reminder: 'less then 30 chars',
            city: '',
            color: 'primary',
        };
        expect(service.addReminder(reminder)).toBeTruthy();
    });

    it('should invalidate a reminder with more then 30 characters', () => {
        const service: CalendarService = TestBed.get(CalendarService);
        const reminder: ReminderModel = {
            day: 1,
            year: 2018,
            month: 1,
            date: new Date().toJSON(),
            reminder: Array(31).fill(' ').join(''),
            city: '',
            color: 'primary',
        };
        expect(service.addReminder(reminder)).toBeNull();
    });
});
