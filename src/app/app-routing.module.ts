import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovadoComponent } from './pages/aprovado/aprovado.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { ImovelComponent } from './pages/imovel/imovel.component';
import { ReprovadoComponent } from './pages/reprovado/reprovado.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'cliente', component: ClienteComponent },
  { path:'imovel', component: ImovelComponent },
  { path: 'aprovado', component: AprovadoComponent },
  { path: 'reprovado', component: ReprovadoComponent }

  //{ path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
