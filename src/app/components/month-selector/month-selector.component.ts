import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-month-selector',
    templateUrl: './month-selector.component.html',
    styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent implements OnInit {
    public monthValue: number;
    public yearValue: number;
    @Output() monthChange = new EventEmitter<number>();
    @Output() yearChange = new EventEmitter<number>();
    @Input() get month() {
        return this.monthValue;
    }
    @Input() get year() {
        return this.yearValue;
    }
    set month(value: number) {
        this.monthValue = value;
        this.monthChange.emit(value);
    }
    set year(value: number) {
        this.yearValue = value;
        this.yearChange.emit(value);
    }

    constructor() { }

    ngOnInit() {
    }

}
