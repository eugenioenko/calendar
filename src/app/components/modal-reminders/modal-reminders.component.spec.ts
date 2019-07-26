import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemindersComponent } from './modal-reminders.component';

describe('ModalRemindersComponent', () => {
  let component: ModalRemindersComponent;
  let fixture: ComponentFixture<ModalRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRemindersComponent ]
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
