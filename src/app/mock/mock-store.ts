import { CalendarModel } from '../models/calendar.model';
import { Observable, of } from 'rxjs';

export class MockStore {

    public subscribe(): Observable<CalendarModel> {
        return of(new CalendarModel());
    }

    public dispatch(message: any): void {

    }
}
