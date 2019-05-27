import { Component, OnInit } from '@angular/core';

//Libreria necesaria para usar los eventos de los formularios por template
import { NgForm } from '@angular/forms';

//Se llama la interfaz para usar los atributos de la clase
import { Marca } from '../../../interfaces/marca.interface';

//Llamo al servicio para llamar a los metodos
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styles: []
})
export class MarcasComponent implements OnInit {

  marca:Marca[]=[];

  constructor(private _marcaService:MarcaService) {
    this._marcaService.listarMarcas().subscribe(
    resultado =>{
      for(let item in resultado){
        console.log(resultado[item]);
        this.marca.push(resultado[item]);
      }
    }, 
    error =>{

    });
   }

  borrarMarca(id:string){
    this._marcaService.borrarMarca(id).subscribe(
      resultado =>{
        if(resultado){
          console.log(resultado);
        }else{
          delete this.marca[id];
        }
      }
    )
  }

  ngOnInit() {
  }

}
