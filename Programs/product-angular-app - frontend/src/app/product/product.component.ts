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
    url:new FormControl()
  });
  products:Array<Product>=[];
  constructor(public ps:ProductService){    // DI for ProductService 
  }
  // this method call only once when component get loaded..
  ngOnInit(): void {
      this.loadAllProductDetails();
  }

  storeMsg:string ="";
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
      //console.log(product);

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
}


