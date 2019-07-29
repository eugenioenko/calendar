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
    private forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

    constructor(private http: HttpClient) { }

    public getForecast(cityName: string, date: moment.Moment): Observable<any> {
        return this.http.get(`${this.forecastUrl}${cityName}&appid=${this.apiKey}`)
            .pipe(
                map((data: any) => {
                    const forecasts = data.list.filter((forecast: any) =>
                        moment(forecast.dt_txt).startOf('days').isSame(date.clone().startOf('days'))
                    );
                    const index = this.findTimeIndex(forecasts, date);
                    return this.updateTempToFarenheit(forecasts[index]);
                })
            );
    }

    public getWeather(cityName: string): Observable<any> {
        return this.http.get(`${this.weatherUrl}${cityName}&appid=${this.apiKey}`)
            .pipe(
                map((data: any) => this.updateTempToFarenheit(data))
            );
    }

    private findTimeIndex(data: any[], momentDate: moment.Moment): number {
        for (let i = 0; i < data.length - 1; ++i) {
            const aDate = moment(data[i].dt_txt).startOf('hour');
            const bDate = moment(data[i + 1].dt_txt).startOf('hour');
            // search time is between two available forecast periods
            if (momentDate.isBetween(aDate, bDate) || momentDate.isSame(aDate, 'hour')) {
                return i;
            }
        }

        const lastDate = moment(data[data.length - 1].dt_txt).startOf('hour');
        // search time is after last available forecast time
        if (momentDate.isSameOrAfter(lastDate)) {
            return data.length - 1;
        }

        return 0;
    }

    private updateTempToFarenheit(weather: any): any {
        // Converting Kelvin to Farenheit
        weather.main.temp = Math.round((weather.main.temp - 273.15) * 9 / 5 + 32);
        return weather;
    }
}
