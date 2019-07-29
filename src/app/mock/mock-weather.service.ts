import { Observable, of } from 'rxjs';
import * as moment from 'moment';

export class MockWeatherService {

    public getForCity(cityName: string, date: moment.Moment): Observable<any> {
        return of(null);
    }
}
