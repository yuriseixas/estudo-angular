import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/movies.model';
import { OmdbService } from 'src/app/omdb.service';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css'],
})
export class ListaFilmeComponent implements OnInit {
  filmes!: Observable<Movie[]>;
  erro: any;

  constructor(private omdbService: OmdbService, private router: Router) {}

  ngOnInit(): void {}

  onSearch(name: string) {
    this.filmes = this.omdbService.buscarFilme(name);
  }

  getDetalhe(id: any) {
    this.router.navigate(['detalhes', id]);
  }
}
