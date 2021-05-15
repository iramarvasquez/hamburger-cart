import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: any ={};
  products: any ={};

  constructor(private productsService:ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){

    this.productsService.getProducts()
    .subscribe(   
      (data)=>{
        this.data = data;
        console.log("Datsososjdnhijts", this.data);
        this.products = this.data.tasks;
        // this.successfully = true;         
        console.log("Products", this.products);
      },
      (error)=>{ 
        console.log(error);
      });
  }

}
