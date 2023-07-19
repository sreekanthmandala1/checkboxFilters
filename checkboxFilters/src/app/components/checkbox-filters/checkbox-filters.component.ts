import { Component } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map, shareReplay, switchMap, tap } from "rxjs/operators";
import { Crop } from "../../crop.model";
import { CropService } from "../../crop.service";

interface Filter {
  name: string ;
  checked: boolean;
}

@Component({
  selector: 'app-checkbox-filters',
  templateUrl: './checkbox-filters.component.html',
  styleUrls: ['./checkbox-filters.component.scss']
})
export class CheckboxFiltersComponent  {
  crops$!: Observable<Crop[]>;
  filteredCrops$!: Observable<Crop[]>;
  nameFilters$ = new BehaviorSubject<any>([]);
  districtFilters$ = new BehaviorSubject<any>([]);
  filteredDistrictCheckboxes$!: Observable<Filter[]>;
  associatedNameFilter : any;
  associatedDistrictFilter:any;

  constructor(private cropService: CropService) {}
  
  ngOnInit(): void {
    this.crops$ = this.cropService.getAllCrops().pipe(
      tap(crops => {
        const names = Array.from(new Set(crops.map(crop => crop.name)));
        this.nameFilters$.next(
          names.map(name => ({ name, checked: true } as Filter))
        );
        const dictricts = Array.from(new Set(crops.map(crop => crop.district)));
        this.districtFilters$.next(
          dictricts.map(name => ({ name, checked: true } as Filter))
        );
      }),
      shareReplay(1)
    );
    this.filteredCrops$ = combineLatest(
      this.crops$,
      this.nameFilters$,
      this.districtFilters$
    ).pipe(
      map(
        ([crops, nameFilters, districtFilters]: [
          Crop[],
          Filter[],
          Filter[]
        ]) => {
          let items = [...crops];
          items = items.filter(item => {
             this.associatedNameFilter = nameFilters.find(
              filter => filter.name === item.name
            );
             this.associatedDistrictFilter = districtFilters.find(
              filter => filter.name === item.district
            );
            return (
              this.associatedNameFilter.checked && this.associatedDistrictFilter.checked
            );
          });
          return items;
        }
      )
    );

    this.filteredDistrictCheckboxes$ = this.nameFilters$.pipe(
      switchMap((nameFilters: Filter[]) => {
        return this.crops$.pipe(
          map(crops => {
            const enabledNames = nameFilters
              .filter(item => item.checked)
              .map(filter => filter.name);
            const enabledDistricts = Array.from(
              new Set(
                crops
                  .filter(crop => enabledNames.includes(crop.name))
                  .map(crop => crop.district)
              )
            );
            const result = this.districtFilters$.value.filter((item:any) =>
              enabledDistricts.includes(item.name)
            );
            return result;
          })
        );
      })
    );
  }

  onNameFilterChange(item : any) {
    debugger
    this.nameFilters$.value.find(
      (filter:any)  => filter.name === item.name
    ).checked = !item.checked;
    this.nameFilters$.next([...this.nameFilters$.value]);
  }

  onDistrictFilterChange(item:any) {
    this.districtFilters$.value.find(
      (filter:any) => filter.name === item.name
    ).checked = !item.checked;
    this.districtFilters$.next([...this.districtFilters$.value]);
  }
}
