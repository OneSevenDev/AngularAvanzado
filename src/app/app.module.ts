import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArituloComponent } from './maestras/aritulo/aritulo.component';
import { GraficaComponent } from './comunes/grafica/grafica.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './comunes/header/header.component';
import { ArticuloDetalleComponent } from './maestras/articulo-detalle/articulo-detalle.component';
import { PromesaComponent } from './maestras/promesa/promesa.component';
import { RxjsComponent } from './maestras/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    ArituloComponent,
    GraficaComponent,
    HeaderComponent,
    ArticuloDetalleComponent,
    PromesaComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
