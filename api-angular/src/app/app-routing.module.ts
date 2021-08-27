import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeDetalhesComponent } from './pages/filme-detalhes/filme-detalhes.component';

const routes: Routes = [
  { path: 'detalhes/:id', component: FilmeDetalhesComponent },
  {
    path: 'filmes',
    loadChildren: () =>
      import('./pages/filmes/filmes.module').then((m) => m.FilmesModule),
  },
  {
    path: '',
    redirectTo: '/filmes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
