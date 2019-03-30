import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArituloComponent } from './maestras/aritulo/aritulo.component';
import { GraficaComponent } from './comunes/grafica/grafica.component';
import { ArticuloDetalleComponent } from './maestras/articulo-detalle/articulo-detalle.component';
import { PromesaComponent } from './maestras/promesa/promesa.component';
import { RxjsComponent } from './maestras/rxjs/rxjs.component';
import { ArticuloDataComponent } from './maestras/articulo-data/articulo-data.component';

const routes: Routes = [
    { path: 'articulo', component: ArituloComponent },
    { path: 'grafica', component: GraficaComponent },
    { path: 'articulo/:id', component: ArticuloDetalleComponent },
    { path: 'articulo-data/:id', component: ArticuloDataComponent },
    { path: 'promesa', component: PromesaComponent },
    { path: 'rxjs', component: RxjsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
