import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PlotParameter} from '../../../models/plot-parameter';
import {Person} from '../../../models/person';
import {SearchService} from '../../../services/search.service';
import {Subscription} from 'rxjs';
import {Starship} from '../../../models/starship';
import {Planet} from '../../../models/planet';

@Component({
  selector: 'app-plot-parameter',
  templateUrl: './plot-parameter.component.html',
  styleUrls: ['./plot-parameter.component.scss']
})
export class PlotParameterComponent implements OnInit, OnDestroy {
  @Input() parameterName: string;
  @Input() parameters: PlotParameter[];

  searchResults: PlotParameter[] = [];

  private typingTimer;
  private typingInterval = 200; // to search for the person after the user stops typing for 3 secs

  private subscriptions: Subscription[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

  /**
   * adds new parameter if it doesn't already exist in the list
   * @param parameter the new parameter to be added
   */
  addParameter(parameter: PlotParameter): void {
    const parameterAlreadyExists = this.parameters
      .findIndex((param) => param.name === parameter.name) !== -1;
    if (!parameterAlreadyExists) {
      this.parameters.push(parameter);
    }
    this.clearSearchResults();
  }

  /**
   * removes the parameter with parameterName from the list if it exists in the list
   * @param parameterName the name of the parameter to be removed
   */
  removeParameter(parameterName: string): void {
    const parameterExists = this.parameters
      .findIndex((param) => param.name === parameterName) !== -1;
    if (parameterExists) {
      this.parameters.splice(
        this.parameters.findIndex(param => param.name === parameterName),
        1);
    }
  }

  clearTypingTimer(): void {
    clearTimeout(this.typingTimer);
  }

  clearSearchResults(event?): void {
    setTimeout(() => {
      this.searchResults = [];
      if (event) {
        event.target.value = '';
      }
    }, 200);
  }

  /**
   * calls the search api after the user stops typing for typingInterval milliseconds
   */
  searchForParameter(event): void {
    this.clearTypingTimer();
    this.typingTimer = setTimeout(() => {
      const name = event.target.value;
      switch (this.parameterName) {
        case 'People':
          this.searchForPerson(name);
          break;
        case 'Planets':
          this.searchForPlanet(name);
          break;
        case 'Starships':
          this.searchForStarship(name);
          break;
      }
    }, this.typingInterval);
  }

  private searchForPerson(name): void {
    this.subscriptions.push(
      this.searchService
        .searchForPerson(name)
        .subscribe((result: Person[]) => {
          if (result && result.length) {
            this.searchResults = result.slice(0, 10);
          } else {
            this.clearSearchResults();
          }
        })
    );
  }

  private searchForPlanet(name): void {
    this.subscriptions.push(
      this.searchService
        .searchForPlanet(name)
        .subscribe((result: Planet[]) => {
          if (result && result.length) {
            this.searchResults = result.slice(0, 10);
          } else {
            this.clearSearchResults();
          }
        })
    );
  }

  private searchForStarship(name): void {
    this.subscriptions.push(
      this.searchService
        .searchForStarship(name)
        .subscribe((result: Starship[]) => {
          if (result && result.length) {
            this.searchResults = result.slice(0, 10);
          } else {
            this.clearSearchResults();
          }
        })
    );
  }

}
