import {Person} from './person';
import {Starship} from './starship';
import {Planet} from './planet';

export class Plot {
  id?: number;
  title: string;
  description: string;
  people: Person[];
  starships: Starship[];
  planets: Planet[];

  constructor() {
    this.people = [];
    this.starships = [];
    this.planets = [];
  }
}
