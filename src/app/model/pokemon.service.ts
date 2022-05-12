import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemons: Pokemon[] = [
    {
      nome: 'bulbasaur',
      peso: 69,
      foto_front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      foto_back:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      animacao:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
      altura: 7,
      habilidades: [
        {
          habilidade: 'overgrow',
        },
        {
          habilidade: 'chlorophyll',
        },
      ],
      tipos: [
        {
          tipo: 'grass',
        },
        {
          tipo: 'poison',
        },
      ],
    },
    {
      nome: 'charizard',
      peso: 905,
      altura: 17,
      foto_front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
      foto_back:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
      animacao:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif',
      habilidades: [
        {
          habilidade: 'blaze',
        },
        {
          habilidade: 'solar-power',
        },
      ],
      tipos: [
        {
          tipo: 'fire',
        },
        {
          tipo: 'flying',
        },
      ],
    },
    {
      nome: 'caterpie',
      peso: 29,
      altura: 3,
      foto_front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg',
      foto_back:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png',
      animacao:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif',
      habilidades: [
        {
          habilidade: 'shield-dust',
        },
        {
          habilidade: 'run-away',
        },
        {
          habilidade: 'big-pecks',
        },
      ],
      tipos: [
        {
          tipo: 'bug',
        },
      ],
    },
    {
      nome: 'rattata',
      peso: 35,
      altura: 3,
      foto_front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg',
      foto_back:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png',
      animacao:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif',
      habilidades: [
        {
          habilidade: 'run-away',
        },
        {
          habilidade: 'guts',
        },
        {
          habilidade: 'hustle',
        },
      ],
      tipos: [
        {
          tipo: 'normal',
        },
        {
          tipo: 'flying',
        },
      ],
    },
    {
      nome: 'pidgeot',
      peso: 395,
      altura: 15,
      foto_front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg',
      foto_back:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png',
      animacao:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif',
      habilidades: [
        {
          habilidade: 'keen-eye',
        },
        {
          habilidade: 'tangled-feet',
        },
        {
          habilidade: 'big-pecks',
        },
      ],
      tipos: [
        {
          tipo: 'normal',
        },
        {
          tipo: 'flying',
        },
      ],
    },
    {
      nome: 'squirtle',
      peso: 90,
      altura: 5,
      foto_front:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
      foto_back:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
      animacao:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif',
      habilidades: [
        {
          habilidade: 'torrent',
        },
        {
          habilidade: 'rain-dish',
        },
      ],
      tipos: [
        {
          tipo: 'water',
        },
      ],
    },
  ];

  public getPokemons(): Pokemon[] {
    this.pokemons = this.pokemons.map((pokemon) => {
      return pokemon;
    });

    return this.pokemons;
  }
}
