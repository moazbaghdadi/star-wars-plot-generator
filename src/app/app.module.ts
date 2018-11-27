import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewPlotComponent } from './pages/new-plot/new-plot.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { PlotComponent } from './pages/plot/plot.component';
import { PlotsListComponent } from './components/plots-list/plots-list.component';
import { PlotListItemComponent } from './components/plots-list/plot-list-item/plot-list-item.component';
import { PlotParameterComponent } from './components/add-plot/plot-parameter/plot-parameter.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewPlotComponent,
    StartPageComponent,
    PlotComponent,
    PlotsListComponent,
    PlotListItemComponent,
    PlotParameterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
