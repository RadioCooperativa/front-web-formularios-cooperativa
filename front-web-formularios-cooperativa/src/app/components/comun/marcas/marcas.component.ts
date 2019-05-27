import { Component, OnInit } from '@angular/core';

//Libreria necesaria para usar los eventos de los formularios por template
import { NgForm } from '@angular/forms';

//Se llama la interfaz para usar los atributos de la clase
import { Marca } from '../../../interfaces/marca.interface';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styles: []
})
export class MarcasComponent implements OnInit {

  //Valores por defecto
  mi_marca:Marca = {
    nombre_marca:"",
    descripcion_marca:""
  }

  constructor() { }

  ngOnInit() {
  }

}
