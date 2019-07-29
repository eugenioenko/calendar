import { Observable, of } from 'rxjs';
import * as moment from 'moment';

export class MockWeatherService {

    public getForecast(cityName: string, date: moment.Moment): Observable<any> {
        return of(null);
    }

    public getWeather(cityName: string): Observable<any> {
        return of(null);
    }
}
