import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tiendaGuard } from './tienda.guard';

describe('tiendaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tiendaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
