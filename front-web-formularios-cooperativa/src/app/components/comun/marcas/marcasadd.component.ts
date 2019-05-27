import { Component, OnInit } from '@angular/core';

//Libreria necesaria para usar los eventos de los formularios por template
import { NgForm } from '@angular/forms';

//Se llama la interfaz para usar los atributos de la clase
import { Marca } from '../../../interfaces/marca.interface';

//Llamo al servicio para llamar a los metodos
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-marcasadd',
  templateUrl: './marcasadd.component.html',
  styles: []
})
export class MarcasaddComponent implements OnInit {

   //Valores por defecto
  mi_marca:Marca = {
    nombre_marca:"",
    descripcion_marca:""
  }

  constructor(private _marcaService:MarcaService ) { }

  guardarMarca(){

    this._marcaService.insertarNuevaMarca(this.mi_marca).subscribe(
    resultado =>{
      console.log("resultado =>", resultado);
    },
    error=>{
      console.log("error =>", error);
    });

  }

  ngOnInit() {
  }
}
