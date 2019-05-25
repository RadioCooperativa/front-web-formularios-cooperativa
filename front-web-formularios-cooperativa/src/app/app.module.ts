import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Mis componentes
import { MarcasComponent } from './components/comun/marcas/marcas.component';
import { MarcasaddComponent } from './components/comun/marcas/marcasadd.component';

//Mi maquetacion
import { NavbarComponent } from './components/design/navbar/navbar.component';
import { InicioComponent } from './components/design/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    MarcasaddComponent,
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
