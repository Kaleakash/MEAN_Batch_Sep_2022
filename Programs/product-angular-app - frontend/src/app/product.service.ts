import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }   //DI for HttpClient 

  // findAllProduct(){
    
  //   this.http.get("http://localhost:3000/api/products/findProductInfo").subscribe({
  //     next:(data:any)=>console.log(data),
  //     error:(error:any)=>console.log(error),
  //     complete:()=>console.log("done!")
  //   });

  // }

  // those product array in json format we are converting into Product array model and and return to component. 
  findAllProduct():Observable<Product[]>{
      return this.http.get<Product[]>("http://localhost:3000/api/products/findProductInfo",{responseType:"json"});
  }

  storeProduct(product:any):Observable<string> {
    return this.http.post("http://localhost:3000/api/products/storeProduct",product,{responseType:'text'});
  }
}










