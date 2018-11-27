import { Component, OnInit } from '@angular/core';
import {Plot} from '../../models/plot';
import {PlotsManagementService} from '../../services/plots-management.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements OnInit {
  plot: Plot;

  constructor(private activatedRoute: ActivatedRoute, public plotManagementService: PlotsManagementService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.plot = this.plotManagementService.getPlotById(+params.get('id'));
    });
  }

}
