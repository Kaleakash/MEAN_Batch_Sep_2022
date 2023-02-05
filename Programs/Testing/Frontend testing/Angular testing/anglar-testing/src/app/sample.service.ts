import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(public http:HttpClient) { }


  addNumber(a:number,b:number):number{
    let sum = a+b;
    return sum;
  }

  getFakeRestAPI():Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
