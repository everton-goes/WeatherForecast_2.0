import { CidadeComponent } from './componentes/cidade/cidade.component';
import { PrevisaoTempoComponent } from './componentes/previsao-tempo/previsao-tempo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CidadeComponent},
  { path: 'previsaoTempo/:id', component: PrevisaoTempoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
