import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent} from './pages/start-page/start-page.component';
import {NewPlotComponent} from './pages/new-plot/new-plot.component';
import {PlotComponent} from './pages/plot/plot.component';

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'new', component: NewPlotComponent},
  {path: 'plot/:id', component: PlotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
