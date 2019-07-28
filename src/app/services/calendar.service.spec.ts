import { TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar.service';
import { Store } from '@ngrx/store';
import { MockStore } from '../mock/mock-store';

describe('CalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: Store, useClass: MockStore}]
  }));

  it('should be created', () => {
    const service: CalendarService = TestBed.get(CalendarService);
    expect(service).toBeTruthy();
  });
});
