import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Se Importan todos las rutas de los componentes para movilizarse
//Mis componentes que se comunicaran redireccionando
import { MarcasComponent } from './components/comun/marcas/marcas.component';
import { MarcasaddComponent } from './components/comun/marcas/marcasadd.component';

//Mi pagina de inicio
import { InicioComponent } from './components/design/inicio/inicio.component';

const routes: Routes = [
  { path: '', component : InicioComponent},
  { path: 'inicio', component : InicioComponent},
  { path: 'marcas' , component : MarcasComponent},//Pagina de marcas
  { path: 'marcasadd/:nuevo' , component : MarcasaddComponent},//Pagina para crear una nueva marca
  { path: '**', component : InicioComponent}//Pagina not found 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//useHash:true se usa para agregar un simbolo # al navegar en los enlaces
export class AppRoutingModule { useHash:false }
