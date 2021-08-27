import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { OmdbService } from '../../../omdb.service';

@Component({
  selector: 'app-busca-filme',
  templateUrl: './busca-filme.component.html',
  styleUrls: ['./busca-filme.component.css'],
})
export class BuscaFilmeComponent implements OnInit {
  name = new FormControl('');

  @Output()
  onSearch = new EventEmitter();

  constructor(private OmdbService: OmdbService) {
    this.name.valueChanges.pipe(debounceTime(400)).subscribe((res) => {
      this.onSearch.emit(res);
    });
  }

  ngOnInit(): void {}
}
