/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should return a static value of Glen', inject([UserService], (service: UserService) => {
    expect(service.getCurrentUser).toBeTruthy('Glen');
  }));
});
