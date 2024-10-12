import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  searchText: string = '';

 
  productos = [
    {
      nombre: 'Mesa de Roble',
      descripcion: 'Mesa de madera maciza de roble con acabados naturales.',
      precio: 250,
      imagen: 'assets/mesa-roble.jpg'
    },
    {
      nombre: 'Silla de Pino',
      descripcion: 'Silla ergonómica hecha de madera de pino tratada.',
      precio: 75,
      imagen: 'assets/silla-pino.jpg'
    },
    {
      nombre: 'Estantería de Caoba',
      descripcion: 'Estantería robusta de madera de caoba ideal para oficinas o salas de estar.',
      precio: 400,
      imagen: 'assets/estanteria-caoba.jpg'
    },
    {
      nombre: 'Puerta de Cedro',
      descripcion: 'Puerta de madera de cedro con diseño clásico y elegante.',
      precio: 500,
      imagen: 'assets/puerta-cedro.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  productosFiltrados() {
    if (!this.searchText) {
      return this.productos;
    }
    const searchTextLower = this.searchText.toLowerCase();
    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchTextLower) ||
      producto.descripcion.toLowerCase().includes(searchTextLower)
    );
  }

}
