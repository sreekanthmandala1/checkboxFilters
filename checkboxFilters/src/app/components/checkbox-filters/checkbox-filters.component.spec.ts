import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFiltersComponent } from './checkbox-filters.component';

describe('CheckboxFiltersComponent', () => {
  let component: CheckboxFiltersComponent;
  let fixture: ComponentFixture<CheckboxFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
