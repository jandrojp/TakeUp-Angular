import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { FormularioAnyadirComponent } from './formulario-anyadir/formulario-anyadir.component';

const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'formularioAñadir', component: FormularioAnyadirComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasRoutingModule {}
