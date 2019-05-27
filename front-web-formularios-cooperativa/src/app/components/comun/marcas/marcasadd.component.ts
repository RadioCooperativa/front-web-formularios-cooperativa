import { Component, OnInit } from '@angular/core';

//Libreria necesaria para usar los eventos de los formularios por template
import { NgForm } from '@angular/forms';

//Se llama la interfaz para usar los atributos de la clase
import { Marca } from '../../../interfaces/marca.interface';

//Para acceder a la ruta
import {Router, ActivatedRoute} from '@angular/router';

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

  nuevo:boolean = false;
  id:string;

  constructor(private _marcaService:MarcaService,
              private saveRouter:Router,
              private upRouter:ActivatedRoute) {
    //Obtengo el id por parametros en el app routing nuevo
      this.upRouter.params.subscribe(parametros =>{
        this.id = parametros['id']
        if(this.id !== "nuevo"){
          this._marcaService.obtenerMarca(this.id).subscribe(marca => this.mi_marca);
        }

        });
  }

  guardarMarca(){

    if(this.id === "nuevo"){
      //Inserto segun la variable nuevo
      this._marcaService.insertarNuevaMarca(this.mi_marca).subscribe(
      resultado =>{
        this.saveRouter.navigate(['/marcas'],resultado);
      },
      error=>{
        console.log(<any>error);
      });
    }else{
      //Guardo
      this._marcaService.actualizarMarca(this.mi_marca, this.id).subscribe(
      resultado =>{
        console.log(resultado);
      },
      error=>{
        console.log(<any>error);
      });
    }

    

  }

  ngOnInit() {
  }
}
