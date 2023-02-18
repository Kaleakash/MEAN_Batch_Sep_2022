import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{    // OnInit is a interface which contains ngOnInit method 

  productRef = new FormGroup({
    _id:new FormControl(),
    pname:new FormControl(),
    price:new FormControl(),
    url:new FormControl(),
  });
  // loginRef = new FormGroup({
  //   email:new FormControl(),
  //   password:new FormControl(),
  //   typeofuser:new FormControl()
  // })
  // signIn() {
  //     let login = this.loginRef.value;
  //     console.log(login);  
  // }
  products:Array<Product>=[];
  constructor(public ps:ProductService){    // DI for ProductService 
  }
  // this method call only once when component get loaded..
  ngOnInit(): void {
      this.loadAllProductDetails();
  }

  storeMsg:string ="";
  
  btn:string ="Store product";

  loadAllProductDetails() {
    this.ps.findAllProduct().subscribe({
      next:(data:any)=> {
            this.products=data;       // all data stored in products array object variable. 
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("done!")
    })
  }

  storeProduct(){
    let product = this.productRef.value;    // extracting four values from form group in json format.       
      if(this.btn=="Store Product"){
       alert(" I came here")
        this.ps.storeProduct(product).subscribe({
          next:(result:any)=> {
            //console.log(result)
            this.storeMsg=result;
          },
          error:(error:any)=>console.log(error),
          complete:()=>
          {
            this.loadAllProductDetails();
            console.log(" store done!")
          }
        })

      }else {
         this.ps.updateProduct(product).subscribe({
          next:(result:any)=> {
            //console.log(result)
            this.storeMsg=result;
          },
          error:(error:any)=>console.log(error),
          complete:()=>
          {
            this.loadAllProductDetails();
            console.log("update done!")
            this.btn="Store Product"
          }
         })

      }
      

      this.productRef.reset();
  }

  deleteRec(id:any) {
    //console.log(id)
    this.ps.deleteProduct(id).subscribe({
      next:(result:any)=> {
          console.log(result);
      },
      error:(error:any)=>console.log(error),
      complete:()=>{
        this.loadAllProductDetails();
        console.log("delete done!")
      }
    })
  }

  updateRec(product:any){
    //console.log(product);
    this.btn="Update Product";
    this.productRef.get("_id")?.setValue(product._id);
    this.productRef.get("pname")?.setValue(product.pname);
    this.productRef.get("price")?.setValue(product.price);
    this.productRef.get("url")?.setValue(product.url);
  }
}


