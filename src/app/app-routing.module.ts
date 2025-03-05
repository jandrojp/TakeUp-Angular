import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './admin/tienda/tienda.component';
import { TiendaGuard } from './guards/tienda.guard';

const routes: Routes = [
  {
    path: 'principal',
    loadChildren: () =>
      import('./ventas/ventas.module').then((m) => m.VentasModule),
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./marketing/marketing.module').then((m) => m.MarketingModule),
  },
  { path: 'tienda', component: TiendaComponent, canActivate: [TiendaGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
