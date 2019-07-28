import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthViewComponent } from './month-view.component';
import { Store } from '@ngrx/store';
import { MockStore } from '../../mock/mock-store';
import { DayViewComponent } from '../day-view/day-view.component';

describe('MonthViewComponent', () => {
  let component: MonthViewComponent;
  let fixture: ComponentFixture<MonthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthViewComponent, DayViewComponent ],
      providers: [{provide: Store, useClass: MockStore}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
