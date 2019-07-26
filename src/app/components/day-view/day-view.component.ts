import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {
    @Input() public date: moment.Moment;
    @Input() public month: number;
    @Input() public weekend: boolean;

    constructor() { }

    ngOnInit() {
    }

}
