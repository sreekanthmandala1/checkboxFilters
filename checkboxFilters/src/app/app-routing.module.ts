import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxFiltersComponent } from './components/checkbox-filters/checkbox-filters.component';

const routes: Routes = [
  {
    path : 'checkbox' , component : CheckboxFiltersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
