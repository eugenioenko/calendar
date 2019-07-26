import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-reminders',
    templateUrl: './modal-reminders.component.html',
    styleUrls: ['./modal-reminders.component.scss']
})
export class ModalRemindersComponent implements OnInit {

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit() {
    }

}
