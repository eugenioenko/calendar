import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemindersComponent } from './modal-reminders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { MockStore } from 'src/app/mock/mock-store';

describe('ModalRemindersComponent', () => {
  let component: ModalRemindersComponent;
  let fixture: ComponentFixture<ModalRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRemindersComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
      ],
      providers: [NgbActiveModal, {provide: Store, useClass: MockStore}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
