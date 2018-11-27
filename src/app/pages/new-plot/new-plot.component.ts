import {Component, OnInit, ViewChild} from '@angular/core';
import {Plot} from '../../models/plot';
import {PlotsManagementService} from '../../services/plots-management.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-plot',
  templateUrl: './new-plot.component.html',
  styleUrls: ['./new-plot.component.scss']
})
export class NewPlotComponent implements OnInit {
  plot: Plot = new Plot();
  submitted = false;

  @ViewChild('form') form: NgForm;

  constructor(private plotsManagementService: PlotsManagementService) { }

  ngOnInit() {
  }

  createPlot() {
    this.plotsManagementService.addPlot(this.plot);
    this.plot = new Plot();
    this.form.resetForm();
    this.submitted = true;
  }

}
