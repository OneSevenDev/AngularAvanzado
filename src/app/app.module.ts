import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArituloComponent } from './maestras/aritulo/aritulo.component';
import { GraficaComponent } from './comunes/grafica/grafica.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './comunes/header/header.component';
import { ArticuloDetalleComponent } from './maestras/articulo-detalle/articulo-detalle.component';
import { PromesaComponent } from './maestras/promesa/promesa.component';
import { RxjsComponent } from './maestras/rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloDataComponent } from './maestras/articulo-data/articulo-data.component';
import { InicioSeccionComponent } from './seguridad/inicio-seccion/inicio-seccion.component';
import { ScrollComponent } from './maestras/scroll/scroll.component';
import { UserComponent } from './maestras/user/user.component';
import { UserDetailComponent } from './maestras/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArituloComponent,
    GraficaComponent,
    HeaderComponent,
    ArticuloDetalleComponent,
    PromesaComponent,
    RxjsComponent,
    ArticuloDataComponent,
    InicioSeccionComponent,
    ScrollComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
