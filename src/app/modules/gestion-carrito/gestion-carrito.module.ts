import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { GestionCarritoRoutingModule } from './gestion-carrito-routing.module';

@NgModule({
  declarations: [CarritoComponent],
  imports: [CommonModule, GestionCarritoRoutingModule],
})
export class GestionCarritoModule {}
