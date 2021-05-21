import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: any = {};
  products: any = {};
  // tomate: any = {
  //   price : ''
  // };
  price: any = {
    tomate: "0.50",
    cebola: "0.50",
    alface: "0.50"
  }
  order: any = {
    tomate: {
      selected: false,
      price: '',
      quantity: '1'
    },
    cebola: {
      selected: false,
      price: '',
      quantity: '1'
    },

  };
  valor_price: any;
  order2: any;



  constructor(private productsService: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {

    this.productsService.getProducts()
      .subscribe(
        (data) => {
          this.data = data;
          console.log("Datsososjdnhijts", this.data);
          this.products = this.data.products;
          // this.successfully = true;         
          console.log("Products", this.products);
        },
        (error) => {
          console.log(error);
        });
  }

  onSubmit(dataObj): void {

    this.order2 = dataObj.form.value;
    console.log(this.order);
    console.log(this.order2);
  }

  // Function for one ingredient
  updateCost() {
    var i = 0;
    const itemid = 'item_' + i;
    const elem = document.getElementById(itemid);

    if (elem.id = "item_0") {
      this.valor_price = this.price.tomate;
    }

    console.log('Ingredient price:', this.valor_price);
    console.log('Ingredient quantity', this.order.tomate.quantity);
    console.log('Selected?', this.order.tomate.selected)

    if (this.order.tomate.selected) {
      this.order.tomate.price = this.valor_price * this.order.tomate.quantity;
      console.log('Ingredient Total Price', this.order.tomate.price);
    }


    // if (this.order.tomateAct){
    //   this.price
    // }

    // precio x cantida

    // var sum = 0;
    // var itemid, elem, qtyid, e, qty;
    // i=0;
    // itemid = 'item_' + i;
    //     elem = document.getElementById(itemid);
    //     qtyid = 'qty_' + i;
    //     e = document.getElementById(qtyid);
    //     qty = Number(e.value);

    //     if (elem.checked == true) {
    //         sum += Number(elem.value) * qty;
    //     }

    // document.getElementById("total").value = "R$" + sum;
    // return false;

  }

}
