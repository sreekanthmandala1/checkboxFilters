import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxFiltersComponent } from './components/checkbox-filters/checkbox-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultipleCheckboxFilterComponent } from './components/multiple-checkbox-filter/multiple-checkbox-filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckUnCheckComponent } from './components/check-un-check/check-un-check.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxFiltersComponent,
    MultipleCheckboxFilterComponent,
    NavbarComponent,
    CheckUnCheckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
