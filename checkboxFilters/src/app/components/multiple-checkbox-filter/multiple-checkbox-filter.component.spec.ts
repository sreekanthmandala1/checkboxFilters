import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCheckboxFilterComponent } from './multiple-checkbox-filter.component';

describe('MultipleCheckboxFilterComponent', () => {
  let component: MultipleCheckboxFilterComponent;
  let fixture: ComponentFixture<MultipleCheckboxFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleCheckboxFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleCheckboxFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
