import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

//Obtengo la interfaz para poder insertar uno nuevo con sus propiedades
import { Marca } from '../interfaces/marca.interface';

//Libreria map para mapear las respuestas http y transforma la data
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  marcaBaseURL:string = "http://localhost:3002/v1/marca";

  constructor(private _http:HttpClient) { }

  insertarNuevaMarca(nuevaMarca:Marca){
      let parametros = JSON.stringify(nuevaMarca);

      let headers = new HttpHeaders({
          'Content-Type' : 'application/json'
      });

      //Regresa un observable , se inserta o no
      return this._http.post(this.marcaBaseURL, parametros, { headers }).pipe(
      map(res=>{
        console.log(res);
        return res;
      },
      error =>{
        console.log(error);
        return error;
      }
      ));
  }

  obtenerMarcas(){
    return this._http.get(this.marcaBaseURL)
    .pipe(
      map(
        resultado=>{
          console.log("resultado obtener =>", resultado);
          return resultado;
        }
        ,error=>{
          console.error("error obtener =>", error);
        })
    );
     
    }
}

