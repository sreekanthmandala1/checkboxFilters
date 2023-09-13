import { Component, OnInit } from '@angular/core';
import { GetListService } from 'src/app/services/get-list.service';

@Component({
  selector: 'app-multiple-checkbox-filter',
  templateUrl: './multiple-checkbox-filter.component.html',
  styleUrls: ['./multiple-checkbox-filter.component.scss']
})
export class MultipleCheckboxFilterComponent implements OnInit {
  checkboxArray: any = [
    {
      id: 1,
      type: 'checkbox',
      product: 'electronics'
    },
    {
      id: 2,
      type: 'checkbox',
      product: 'drinks'
    },
    {
      id: 3,
      type: 'checkbox',
      product: 'cricketKit'
    },
    {
      id: 4,
      type: 'checkbox',
      product: 'babyCare'
    },
  ];
  productArray: any = [];
  arrays:any = [];
  tempArray:any=[]
  newArray:any=[]

  constructor(private getListService: GetListService) {

  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    debugger
    this.productArray = this.getListService.getProducts()
    this.arrays = this.getListService.getProducts()
  }

  onChange(event: any) {
    if(event.target.checked == true){
      this.tempArray = this.arrays.filter((e:any)=> e.category == event.target.value)
      this.productArray = []
      this.newArray.push(this.tempArray)
      for(let i =0; i<this.newArray.length ;i++){
        var firstArray = this.newArray[i]
        for(let i =0; i<firstArray.length ;i++){
          var obj = firstArray[i]
          this.productArray.push(obj)
        }
      }
    }else if(event.target.checked == false){
      debugger
      this.tempArray = this.productArray.filter((e:any)=> e.category != event.target.value)
      this.newArray =[]
      this.productArray = []
      this.newArray.push(this.tempArray)
      for(let i =0; i<this.newArray.length ;i++){
        var firstArray = this.newArray[i]
        for(let i =0; i<firstArray.length ;i++){
          var obj = firstArray[i]
          this.productArray.push(obj)
        }
      }
      if(event.target.checked == false && event.target.value == 'electronics'){
        debugger
        this.productArray = this.getListService.getProducts()
      }
    }
    // else if(event.target.checked == false && event.target.value == 'electronics'){
    //   debugger
    //   this.productArray = this.getListService.getProducts()
    // }
  }
}
