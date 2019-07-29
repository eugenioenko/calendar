import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private apiKey = 'f51454523b4361d2dcb1456a4d890905';
    private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';

    constructor(private http: HttpClient) { }

    public getForCity(cityName: string, date: moment.Moment): Observable<any> {
        return this.http.get(`${this.apiUrl}${cityName}&appid=${this.apiKey}`)
            .pipe(
                map((data: any) =>
                    data.list.filter((forecast: any) =>
                        moment(forecast.dt_txt).startOf('days').isSame(date.startOf('days'))
                    )
                )
            );
    }
}
