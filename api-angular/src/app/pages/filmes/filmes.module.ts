import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmesRoutingModule } from './filmes-routing.module';
import { ListaFilmeComponent } from './lista-filme/lista-filme.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BuscaFilmeComponent } from './busca-filme/busca-filme.component';

@NgModule({
  declarations: [ListaFilmeComponent, BuscaFilmeComponent],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class FilmesModule {}
