import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxFiltersComponent } from './components/checkbox-filters/checkbox-filters.component';
import { MultipleCheckboxFilterComponent } from './components/multiple-checkbox-filter/multiple-checkbox-filter.component';

const routes: Routes = [
  {
    path : 'checkbox' , component : CheckboxFiltersComponent
  },
  {
    path : 'multipleCheckboxFilter' , component : MultipleCheckboxFilterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
