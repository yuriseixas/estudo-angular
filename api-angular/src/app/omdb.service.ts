import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { DetailMovieApiResponse, MoviesApiResponse } from './movies.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  apiKey: any;
  url: any;

  constructor(private http: HttpClient) {
    this.apiKey = '35b791d0';
    this.url = 'http://www.omdbapi.com/?apikey=';
  }

  buscarFilme(nome: String) {
    return this.http
      .get<MoviesApiResponse>(this.url + this.apiKey + '&s=' + nome)
      .pipe(
        tap(console.log),
        map((filmes) => filmes.Search)
      );
  }

  detalheFilme(id: String): Observable<DetailMovieApiResponse> {
    console.log('entrou em detalheFilme do service');
    return this.http
      .get<DetailMovieApiResponse>(this.url + this.apiKey + '&i=' + id)
      .pipe(tap(console.log));
  }
}
