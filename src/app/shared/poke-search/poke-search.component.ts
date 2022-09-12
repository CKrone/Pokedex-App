import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  //Enviar o valor digitado no campo de busca para ser recebido pelo poke-list.
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Método que recebe o valor digitado e emite o valor.
  public search(value: string) {
   this.emmitSearch.emit(value);
  }
}
