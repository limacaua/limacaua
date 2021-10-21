import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ImovelComponent } from './imovel/imovel.component';
import { AprovadoComponent } from './aprovado/aprovado.component';
import { ReprovadoComponent } from './reprovado/reprovado.component';
//import { ClienteDados } from './cliente/shared/clientedados.model';



@NgModule({
  declarations: [
    HomeComponent,
    ClienteComponent,
    ImovelComponent,
    AprovadoComponent,
    ReprovadoComponent,
    //ClienteDados
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class PagesModule { }
