import { Component } from '@angular/core';
import { Pokemon } from './model/pokemon';
import { PokemonService } from './model/pokemon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemonSelecionado: Pokemon;

  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }

  selecionarPokemon(pokemon: Pokemon) {
    this.pokemonSelecionado = pokemon;
  }
}
