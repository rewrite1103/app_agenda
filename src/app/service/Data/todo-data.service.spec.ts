import { TestBed } from '@angular/core/testing';

import { TodoDATAService } from './todo-data.service';

describe('TodoDATAService', () => {
  let service: TodoDATAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDATAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
