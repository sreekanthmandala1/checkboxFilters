import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckUnCheckService {
  // students : any = [
  //   {
  //     id : 0 , name : 'Arjun'
  //   },
  //   {
  //     id : 1 , name : 'Aum'
  //   },
  //   {
  //     id : 2 , name : 'Ishan'
  //   },
  //   {
  //     id : 3 , name : 'Krish'
  //   },
  //   {
  //     id : 4 , name : 'Moksh'
  //   },
  //   {
  //     id : 5 , name : 'Nitin'
  //   },
  //   {
  //     id : 6 , name : 'Parin'
  //   },
  //   {
  //     id : 7 , name : 'Rishi'
  //   },
  //   {
  //     id : 8 , name : 'Shankar'
  //   },
  //   {
  //     id : 9 , name : 'Veer'
  //   },
  //   {
  //     id : 10 , name : 'Akshay'
  //   },
  //   {
  //     id : 11 , name : 'Ajay'
  //   },
  //   {
  //     id : 12, name : 'Anil'
  //   },
  //   {
  //     id : 13 , name : 'Ranveer'
  //   },
  //   {
  //     id : 14 , name : 'Sajan'
  //   },
  // ]
  constructor(public http : HttpClient) { }

  getData(){
   return this.http.get('http://localhost:3000/data')
  }

  postData(data: any) {
    debugger
    return this.http.post('http://localhost:3000/data', data);
  }
}
