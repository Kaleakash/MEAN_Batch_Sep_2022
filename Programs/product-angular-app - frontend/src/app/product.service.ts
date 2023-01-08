import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }   //DI for HttpClient 
  baseUrl:string ="http://localhost:3000/api/products";
  // findAllProduct(){
    
  //   this.http.get("http://localhost:3000/api/products/findProductInfo").subscribe({
  //     next:(data:any)=>console.log(data),
  //     error:(error:any)=>console.log(error),
  //     complete:()=>console.log("done!")
  //   });

  // }

  // those product array in json format we are converting into Product array model and and return to component. 
  findAllProduct():Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+"/findProductInfo",{responseType:"json"});
  }

  storeProduct(product:any):Observable<string> {
    return this.http.post(this.baseUrl+"/storeProduct",product,{responseType:'text'});
  }

  deleteProduct(pid:any):Observable<string> {
    return this.http.delete(this.baseUrl+"/deleteProductById/"+pid,{responseType:'text'});
  }
  
}










