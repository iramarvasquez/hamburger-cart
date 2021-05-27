import { Component, Inject, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  shoppingCart: FormGroup;
  description:string;
  tomate: any;


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.tomate = data.tomate;
}

  ngOnInit(): void {
    this.shoppingCart= this.fb.group({
      tomate: [this.tomate, []]     
    });

    console.log(this.shoppingCart.value.tomate);
  }

}
