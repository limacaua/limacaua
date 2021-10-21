import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovadoComponent } from './aprovado/aprovado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { ImovelComponent } from './imovel/imovel.component';
import { ReprovadoComponent } from './reprovado/reprovado.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'imovel', component: ImovelComponent},
  { path: 'aprovado', component: AprovadoComponent},
  { path: 'reprovado', component: ReprovadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
