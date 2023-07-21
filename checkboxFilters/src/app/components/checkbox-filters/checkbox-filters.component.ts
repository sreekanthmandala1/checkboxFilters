import { Component } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, shareReplay, switchMap, tap } from "rxjs/operators";
import { Crop } from "../../crop.model";
import { CropService } from "../../crop.service";

interface Filter {
  name: string ;
  // checked: boolean;
}

@Component({
  selector: 'app-checkbox-filters',
  templateUrl: './checkbox-filters.component.html',
  styleUrls: ['./checkbox-filters.component.scss']
})
export class CheckboxFiltersComponent  {
  crops$!: Observable<any>;
  filteredCrops$!: Observable<Crop[]>;
  nameFilters$ = new BehaviorSubject<any>([]);
  districtFilters$ = new BehaviorSubject<any>([]);
  filteredDistrictCheckboxes$!: Observable<Filter[]>;
  associatedNameFilter : any;
  associatedDistrictFilter:any;
  isChecked:boolean = false

  constructor(private cropService: CropService) {}
  
  ngOnInit(): void {
    this.crops$ = this.cropService.getAllCrops().pipe(
      tap(crops => {
        debugger
        const names = Array.from(new Set(crops.map(crop => crop.name)));
        this.nameFilters$.next(
          names.map(name => ({ name} as Filter))
        );
      }),
      shareReplay(1)
    );
    this.filteredCrops$ = combineLatest(
      this.crops$, 
      this.nameFilters$,
    ).pipe(
      map(
        ([crops, nameFilters]: [
          Crop[],
          Filter[],
        ]) => {
          let items = [...crops];
          items = items.filter(item => {
             this.associatedNameFilter = nameFilters.find(
              filter => filter.name === item.name
            );
            return (
              this.associatedNameFilter.checked
            );
          });
          return items;
        }
      )
    );
  }

  onNameFilterChange(item : any) {
    debugger
    this.nameFilters$.value.find(
      (filter:any)  => filter.name === item.name
    ).checked = !item.checked;
    this.nameFilters$.next([...this.nameFilters$.value]);
  }
}
