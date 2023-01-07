import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:Array<Product>=[];

  constructor(public ps:ProductService){    // DI for ProductService 

  }


  loadAllProductDetails() {
    this.ps.findAllProduct().subscribe({
      next:(data:any)=> {
            this.products=data;       // all data stored in products array object variable. 
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("done!")
    })
  }
}
