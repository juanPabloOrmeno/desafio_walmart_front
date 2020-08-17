import { TestBed } from '@angular/core/testing';

import { ProductosSwService } from './productos-sw.service';

describe('ProductosSwService', () => {
  let service: ProductosSwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosSwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
