import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: '', component: CarritoComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCarritoRoutingModule {}
