import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailMovieApiResponse } from 'src/app/movies.model';
import { OmdbService } from 'src/app/omdb.service';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.css'],
})
export class FilmeDetalhesComponent implements OnInit {
  id: any;
  filmeDetalhado: DetailMovieApiResponse = {} as DetailMovieApiResponse;

  constructor(
    private omdbService: OmdbService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.omdbService.detalheFilme(this.id).subscribe((filmeDetalhado) => {
      this.filmeDetalhado = filmeDetalhado;
    });
  }
}
