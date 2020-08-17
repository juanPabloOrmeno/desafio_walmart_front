import { Component, OnInit } from '@angular/core';
import { ProductosSwService } from 'src/app/services/productos-sw.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  productos: any

  constructor(private productosService: ProductosSwService) { }

  async ngOnInit() {
    this.buscar("")
  }




  async buscar(busqueda: string) {
    try {
      console.log(busqueda)

      let datos = { 
        producto: busqueda, 
      }
      
     let resp = await this.productosService.obtenerProductos(datos)
     this.productos = resp['response']


     console.log(this.productos)

    }
    catch (err) {

    }
  }

}
