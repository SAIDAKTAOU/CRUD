import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsExempleComponent } from './obs-exemple.component';

describe('ObsExempleComponent', () => {
  let component: ObsExempleComponent;
  let fixture: ComponentFixture<ObsExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsExempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
