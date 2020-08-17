import { Injectable } from '@angular/core';
import { ProductosService, ResponseProducto } from 'src/api';

@Injectable({
  providedIn: 'root'
})
export class ProductosSwService {


 
  constructor(private productoService: ProductosService) { }

  async obtenerProductos(datos: any) {
    try {
       return await this.productoService.productosPost(datos).toPromise();
    } catch (err) {
      console.log(err)
    }
  }




}
