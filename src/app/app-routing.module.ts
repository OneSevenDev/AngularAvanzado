import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArituloComponent } from './maestras/aritulo/aritulo.component';
import { GraficaComponent } from './comunes/grafica/grafica.component';
import { ArticuloDetalleComponent } from './maestras/articulo-detalle/articulo-detalle.component';

const routes: Routes = [
    { path: 'articulo', component: ArituloComponent },
    { path: 'grafica', component: GraficaComponent },
    { path: 'articulo/:id', component: ArticuloDetalleComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
