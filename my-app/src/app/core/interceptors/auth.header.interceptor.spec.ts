import { TestBed } from '@angular/core/testing';

import { Auth.HeaderInterceptor } from './auth.header.interceptor';

describe('Auth.HeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Auth.HeaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Auth.HeaderInterceptor = TestBed.inject(Auth.HeaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
