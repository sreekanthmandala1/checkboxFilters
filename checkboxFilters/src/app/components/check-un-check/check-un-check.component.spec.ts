import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUnCheckComponent } from './check-un-check.component';

describe('CheckUnCheckComponent', () => {
  let component: CheckUnCheckComponent;
  let fixture: ComponentFixture<CheckUnCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckUnCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckUnCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
