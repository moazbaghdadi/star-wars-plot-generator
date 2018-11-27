import {Component, OnInit} from '@angular/core';
import {Plot} from '../../models/plot';
import {PlotsManagementService} from '../../services/plots-management.service';

@Component({
  selector: 'app-plots-list',
  templateUrl: './plots-list.component.html',
  styleUrls: ['./plots-list.component.scss']
})
export class PlotsListComponent implements OnInit {
  plots: Plot[];

  constructor(public plotManagementService: PlotsManagementService) { }

  ngOnInit() {
    this.plots = this.plotManagementService.getPlots();
  }

}
