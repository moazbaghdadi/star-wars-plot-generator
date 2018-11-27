import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../models/person';
import {Observable, Subscription} from 'rxjs';
import {Starship} from '../models/starship';
import {Planet} from '../models/planet';
import {PlotParameter} from '../models/plot-parameter';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnDestroy {

  private subscriptions: Subscription[] = [];
  private readonly PEOPLE_URL = 'https://swapi.co/api/people/?search=';
  private readonly PLANETS_URL = 'https://swapi.co/api/planets/?search=';
  private readonly STARSHIPS_URL = 'https://swapi.co/api/starships/?search=';

  constructor(private httpClient: HttpClient) { }

  ngOnDestroy() {
    this.subscriptions.forEach( (sub: Subscription) => {
      sub.unsubscribe();
    });
  }

  searchForPerson(name: string): Observable<Person[]> {
    return this.searchForParameterByName(this.PEOPLE_URL, name);
  }

  searchForPlanet(name: string): Observable<Planet[]> {
    return this.searchForParameterByName(this.PLANETS_URL, name);
  }

  searchForStarship(name: string): Observable<Starship[]> {
    return this.searchForParameterByName(this.STARSHIPS_URL, name);
  }

  private searchForParameterByName(url: string, name: string): Observable<PlotParameter[]> {
    return new Observable<PlotParameter[]>((observer) => {
      this.subscriptions.push(
        this.httpClient
          .get(url + name)
          .subscribe((data) => {
            if (data['count'] > 0) {
              observer.next(data['results']);
            } else {
              observer.next([]);
            }
            observer.complete();
          }, (error) => {
            observer.error(error);
          })
      );
    });
  }

}
