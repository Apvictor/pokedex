import { Habilidades } from './habilidade';
import { Tipos } from './tipos';

export interface Pokemon {
  nome: string;
  foto_back: string;
  foto_front: string;
  animacao: string;
  peso: number;
  altura: number;
  habilidades: Habilidades[];
  tipos: Tipos[];
}
