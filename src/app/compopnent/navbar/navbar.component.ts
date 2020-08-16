import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  search: string = ""

  constructor() { }

  ngOnInit(): void {
  }


  async buscar(busqueda: string) {
    try {
      console.log(busqueda)
    }
    catch (err) {

    }
  }

}
