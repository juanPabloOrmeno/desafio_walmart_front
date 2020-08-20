import { TestBed } from '@angular/core/testing';

import { ProductosSwService } from './productos-sw.service';
import { ProductosService, ResponseProducto } from 'src/api';
import { HttpClientModule } from '@angular/common/http';

describe('ProductosSwService', () => {
  let service: ProductosSwService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ProductosService],
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ProductosSwService);
  });

  it('crea el servicio', () => {
    expect(service).toBeTruthy();
  });
});
