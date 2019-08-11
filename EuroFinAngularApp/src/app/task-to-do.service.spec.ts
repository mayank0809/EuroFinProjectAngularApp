import { TestBed } from '@angular/core/testing';

import { TaskToDoService } from './task-to-do.service';

describe('TaskToDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskToDoService = TestBed.get(TaskToDoService);
    expect(service).toBeTruthy();
  });
});
