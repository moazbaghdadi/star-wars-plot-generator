import { Injectable } from '@angular/core';
import {Plot} from '../models/plot';

@Injectable({
  providedIn: 'root'
})
export class PlotsManagementService {
  private plots: Plot[] = [];
  private idsCounter = 1;

  constructor() { }

  getPlotById(id: number): Plot {
    return this.plots.find(plot => plot.id === id);
  }

  getPlots(): Plot[] {
    return this.plots;
  }

  addPlot(plot: Plot) {
    plot.id = this.idsCounter++;
    this.plots.push(plot);
  }
}
