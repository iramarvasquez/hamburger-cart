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
  tomate:  any;
  cebola: any;
  alface: any;
  cheedar: any;
  milho: any;
  batata_palha: any;
  pepino_japones: any;
  carne: any;
  frango: any;
  calabresa: any;
  presunto: any;
  bacon: any;
  ovo: any;
  batatas_fritas: any;
  coca_cola_2l: any;
  coca_cola_350ml: any;
  fanta_guarana_2l: any;
  fanta_laranja_2l: any;
  fanta_uva_2l: any;
  sprite: any;
  coca_cola_600ml: any;
  mostarda: any;
  ketchup: any;
  maionese: any;
  total: any;


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.tomate = data.order.tomate;
    this.cebola = data.order.cebola;
    this.alface = data.order.alface;
    this.cheedar = data.order.cheedar;
    this.milho = data.order.milho;
    this.batata_palha = data.order.batata_palha
    this.pepino_japones = data.order.pepino_japones
    this.carne = data.order.carne
    this.frango = data.order.frango
    this.calabresa = data.order.calabresa
    this.presunto = data.order.presunto
    this.bacon = data.order.bacon
    this.ovo = data.order.ovo
    this.batatas_fritas = data.order.batatas_fritas
    this.coca_cola_2l = data.order.coca_cola_2l
    this.coca_cola_350ml = data.order.coca_cola_350ml
    this.fanta_guarana_2l = data.order.fanta_guarana_2l
    this.fanta_laranja_2l = data.order.fanta_laranja_2l
    this.fanta_uva_2l = data.order.fanta_uva_2l 
    this.sprite = data.order.sprite
    this.coca_cola_600ml = data.order.coca_cola_600ml
    this.mostarda = data.order.mostarda
    this.ketchup = data.order.ketchup
    this.maionese = data.order.maionese

    this.total = data.total;

}

  ngOnInit(): void {
    this.shoppingCart= this.fb.group({
      tomate: [this.tomate, []],
      cebola: [this.cebola, []],
      alface: [this.alface, []],
      cheedar: [this.cheedar, []],
      milho: [this.milho, []],
      batata_palha: [this.batata_palha, []],
      pepino_japones: [this.pepino_japones, []],
      carne: [this.carne, []],
      frango: [this.frango, []],
      calabresa: [this.calabresa, []],
      presunto: [this.presunto, []],
      bacon: [this.bacon, []],
      ovo: [this.ovo, []],
      batatas_fritas: [this.batatas_fritas, []],
      coca_cola_2l: [this.coca_cola_2l, []],
      coca_cola_350ml: [this.coca_cola_350ml, []],
      fanta_guarana_2l: [this.fanta_guarana_2l, []],
      fanta_laranja_2l: [this.fanta_laranja_2l, []],
      fanta_uva_2l: [this.fanta_uva_2l , []],
      sprite: [this.sprite, []],
      coca_cola_600ml: [this.coca_cola_600ml, []],
      mostarda: [this.mostarda, []],
      ketchup: [this.ketchup, []],
      maionese: [this.maionese, []],
      total: [this.total, []],
    });
  }

}
