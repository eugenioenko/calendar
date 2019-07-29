import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CalendarService } from 'src/app/services/calendar.service';
import * as moment from 'moment';
import { WeatherService } from 'src/app/services/weather.service';
import { ReminderModel } from 'src/app/models/reminder.model';

@Component({
    selector: 'app-modal-reminders',
    templateUrl: './modal-reminders.component.html',
    styleUrls: ['./modal-reminders.component.scss']
})
export class ModalRemindersComponent implements OnInit {
    @Input() public reminderId: number;
    @Input() public date: moment.Moment;
    public form: FormGroup;
    public showError: boolean;
    public forecast: any;

    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        private calendarService: CalendarService,
        private weatherService: WeatherService
    ) { }

    public ngOnInit() {
        if (this.reminderId) {
            this.createEditForm();
        } else {
            this.createAddForm();
        }
    }

    private createAddForm() {
        let ngDate = null;
        if (this.date) {
            ngDate = {
                year: this.date.year(),
                month: this.date.month() + 1,
                day: this.date.date()
            };
        }
        this.form = this.formBuilder.group({
            reminder: ['', [Validators.required, Validators.maxLength(30)]],
            city: [''],
            color: ['primary'],
            date: [ngDate, [Validators.required]],
            time: [{ hour: 0, minute: 0 }]
        });
    }

    private createEditForm() {
        const reminder = this.calendarService.getReminder(this.reminderId);
        const date = {
            year: reminder.year,
            month: reminder.month + 1,
            day: reminder.day
        };
        const momentDate = moment(new Date(reminder.date));
        const time = {
            hour: momentDate.hour(),
            minute: momentDate.minute()
        };

        this.form = this.formBuilder.group({
            reminder: [reminder.reminder, [Validators.required, Validators.maxLength(30)]],
            city: [reminder.city],
            color: [reminder.color],
            date: [date, [Validators.required]],
            time: [time]
        });

        if (reminder.city && reminder.city.length) {
            if (momentDate.clone().startOf('days').isSame(moment().startOf('days'))) {
                this.getWeather(reminder);
            } else {
                this.getForecast(reminder, momentDate);
            }
        }
    }

    public addReminder(update: boolean = false): void {
        if (this.form.invalid) {
            this.showError = true;
            return;
        }
        this.showError = false;
        const value = this.form.value;
        const date = moment([
            value.date.year,
            value.date.month - 1,
            value.date.day,
            value.time && value.time.hour ? value.time.hour : 0,
            value.time && value.time.minute ? value.time.minute : 0
        ]);
        const request = {
            day: value.date.day,
            year: value.date.year,
            month: value.date.month - 1,
            date: date.toLocaleString(),
            reminder: value.reminder,
            city: value.city,
            color: value.color
        };
        if (update) {
            this.calendarService.updateReminder(this.reminderId, request);
        } else {
            this.calendarService.addReminder(request);
        }
        this.activeModal.close('');
    }

    public deleteReminder(): void {
        this.calendarService.deleteReminder(this.reminderId);
        this.activeModal.close();
    }

    public getWeather(reminder: ReminderModel): void {
        this.weatherService.getWeather(reminder.city).subscribe(data => {
            this.forecast = this.updateTempToFarenheit(data);
        }, err => {
            this.forecast = null;
        });
    }

    public getForecast(reminder: ReminderModel, momentDate: moment.Moment): void {
        this.weatherService.getForecast(reminder.city, momentDate).subscribe(data => {
            if (!data || !data.length) {
                this.forecast = null;
                return;
            }
            const index = this.findTimeIndex(data, momentDate);
            this.forecast = this.updateTempToFarenheit(data[index]);
        }, err => {
            this.forecast = null;
        });
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
