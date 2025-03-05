import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss'],
})
export class BarraNavegacionComponent {
  constructor(private router: Router) {}

  irATienda(): void {
    this.router.navigate(['/tienda'], { state: { fromAyuda: true } });
  }
}
