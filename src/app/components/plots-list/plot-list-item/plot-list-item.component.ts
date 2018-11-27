import {Component, Input, OnInit} from '@angular/core';
import {Plot} from '../../../models/plot';

@Component({
  selector: 'app-plot-list-item',
  templateUrl: './plot-list-item.component.html',
  styleUrls: ['./plot-list-item.component.scss']
})
export class PlotListItemComponent implements OnInit {
  @Input() plot: Plot;

  constructor() { }

  ngOnInit() {
  }

}
