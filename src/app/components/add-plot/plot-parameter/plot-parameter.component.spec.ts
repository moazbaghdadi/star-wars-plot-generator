import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotParameterComponent } from './plot-parameter.component';

describe('PlotParameterComponent', () => {
  let component: PlotParameterComponent;
  let fixture: ComponentFixture<PlotParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
