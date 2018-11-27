import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotListItemComponent } from './plot-list-item.component';

describe('PlotListItemComponent', () => {
  let component: PlotListItemComponent;
  let fixture: ComponentFixture<PlotListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
