import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './modules/admin/tienda/tienda.component';
import { TiendaGuard } from './guards/tienda.guard';

const routes: Routes = [
  {
    path: 'ventas',
    loadChildren: () =>
      import('./modules/ventas/ventas.module').then((m) => m.VentasModule),
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./modules/marketing/marketing.module').then(
        (m) => m.MarketingModule
      ),
  },
  { path: 'tienda', component: TiendaComponent, canActivate: [TiendaGuard] },
  {
    path: 'carrito',
    loadChildren: () =>
      import('./modules/gestion-carrito/gestion-carrito.module').then(
        (m) => m.GestionCarritoModule
      ),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
