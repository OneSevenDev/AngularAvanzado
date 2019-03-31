import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArituloComponent } from './maestras/aritulo/aritulo.component';
import { GraficaComponent } from './comunes/grafica/grafica.component';
import { ArticuloDetalleComponent } from './maestras/articulo-detalle/articulo-detalle.component';
import { PromesaComponent } from './maestras/promesa/promesa.component';
import { RxjsComponent } from './maestras/rxjs/rxjs.component';
import { ArticuloDataComponent } from './maestras/articulo-data/articulo-data.component';
import { InicioSeccionComponent } from './seguridad/inicio-seccion/inicio-seccion.component';
import { AuthGuard } from './guards/auth.guard';
import { ScrollComponent } from './maestras/scroll/scroll.component';
import { UserComponent } from './maestras/user/user.component';

const routes: Routes = [
    { path: 'login', component: InicioSeccionComponent },
    { path: 'articulo', component: ArituloComponent, canActivate: [AuthGuard] },
    { path: 'grafica', component: GraficaComponent },
    { path: 'articulo/:id', component: ArticuloDetalleComponent },
    { path: 'articulo-data/:id', component: ArticuloDataComponent },
    { path: 'promesa', component: PromesaComponent },
    { path: 'scroll', component: ScrollComponent },
    { path: 'user', component: UserComponent },
    { path: 'rxjs', component: RxjsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
