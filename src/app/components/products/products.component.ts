import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ApiService } from 'src/app/shared/services/api.service';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';


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

  url: any = {
    tomate: "",
    cebola: "",
    alface: "",
    cheedar: "",
    milho: "",
    batata_palha: "",
    pepino_japones: "",
    carne: "",
    frango: "",
    calabresa: "",
    presunto: "",
    bacon: "",
    ovo: "",
    batatas_fritas: "",
    coca_cola_2l: "",
    coca_cola_350ml: "",
    fanta_guarana_2l: "",
    fanta_laranja_2l: "",
    fanta_uva_2l: "",
    sprite: "",
    coca_cola_600ml: "",
    mostarda: "",
    ketchup: "",
    maionese: "",
    pao: ""
  }

  name: any = {
    tomate: "",
    cebola: "",
    alface: "",
    cheedar: "",
    milho: "",
    batata_palha: "",
    pepino_japones: "",
    carne: "",
    frango: "",
    calabresa: "",
    presunto: "",
    bacon: "",
    ovo: "",
    batatas_fritas: "",
    coca_cola_2l: "",
    coca_cola_350ml: "",
    fanta_guarana_2l: "",
    fanta_laranja_2l: "",
    fanta_uva_2l: "",
    sprite: "",
    coca_cola_600ml: "",
    mostarda: "",
    ketchup: "",
    maionese: "",
    pao: ""
  }

  price: any = {
    tomate: "",
    cebola: "",
    alface: "",
    cheedar: "",
    milho: "",
    batata_palha: "",
    pepino_japones: "",
    carne: "",
    frango: "",
    calabresa: "",
    presunto: "",
    bacon: "",
    ovo: "",
    batatas_fritas: "",
    coca_cola_2l: "",
    coca_cola_350ml: "",
    fanta_guarana_2l: "",
    fanta_laranja_2l: "",
    fanta_uva_2l: "",
    sprite: "",
    coca_cola_600ml: "",
    mostarda: "",
    ketchup: "",
    maionese: "",
    pao: ""
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

    alface: {
      selected: false,
      price: '',
      quantity: '1'
    },
    cheedar: {
      selected: false,
      price: '',
      quantity: '1'
    },
    milho: {
      selected: false,
      price: '',
      quantity: '1'
    },
    batata_palha: {
      selected: false,
      price: '',
      quantity: '1'
    },
    pepino_japones: {
      selected: false,
      price: '',
      quantity: '1'
    },
    carne: {
      selected: false,
      price: '',
      quantity: '1'
    },
    frango: {
      selected: false,
      price: '',
      quantity: '1'
    },
    calabresa: {
      selected: false,
      price: '',
      quantity: '1'
    },
    presunto: {
      selected: false,
      price: '',
      quantity: '1'
    },
    bacon: {
      selected: false,
      price: '',
      quantity: '1'
    },
    ovo: {
      selected: false,
      price: '',
      quantity: '1'
    },
    batatas_fritas: {
      selected: false,
      price: '',
      quantity: '1'
    },
    coca_cola_2l: {
      selected: false,
      price: '',
      quantity: '1'
    },
    coca_cola_350ml: {
      selected: false,
      price: '',
      quantity: '1'
    },
    fanta_guarana_2l: {
      selected: false,
      price: '',
      quantity: '1'
    },
    fanta_laranja_2l: {
      selected: false,
      price: '',
      quantity: '1'
    },
    fanta_uva_2l: {
      selected: false,
      price: '',
      quantity: '1'
    },
    sprite: {
      selected: false,
      price: '',
      quantity: '1'
    },
    coca_cola_600ml: {
      selected: false,
      price: '',
      quantity: '1'
    },
    mostarda: {
      selected: false,
      price: '',
      quantity: '1'
    },
    ketchup: {
      selected: false,
      price: '',
      quantity: '1'
    },
    maionese: {
      selected: false,
      price: '',
      quantity: '1'
    },
    pao: {
      selected: true,
      price: '',
      quantity: '1'
    }
  };

  tomate_price: any;
  cebola_price: any;
  alface_price: any;
  cheedar_price: any;
  milho_price: any;
  batata_palha_price: any;
  pepino_japones_price: any;
  carne_price: any;
  frango_price: any;
  calabresa_price: any;
  presunto_price: any;
  bacon_price: any;
  ovo_price: any;
  batatas_fritas_price: any;
  coca_cola_2l_price: any;
  coca_cola_350ml_price: any;
  fanta_guarana_2l_price: any;
  fanta_laranja_2l_price: any;
  fanta_uva_2l_price: any;
  sprite_price: any;
  coca_cola_600ml_price: any;
  mostarda_price: any;
  ketchup_price: any;
  maionese_price: any;
  pao_price: any;
  total: any;
  displayTotal: any;
  order2: any;



  constructor(private productsService: ApiService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public async getProducts() {
    const promise = await this.productsService.getProducts().toPromise();
    this.data = promise;
    console.log(this.data.product[0]);

    for (let i = 0; i < (this.data.product.length); i++) {
      if (this.data.product[i].id == '1') {

        this.url.tomate = this.data.product[i].urlimg;
        this.name.tomate = this.data.product[i].name;
        this.price.tomate = this.data.product[i].price;
        console.log(this.url.tomate)
        console.log(this.name.tomate)
        console.log(this.price.tomate);
        //console.log(this.data.product[i].name);]
      }

      if (this.data.product[i].id == '2') {
        this.url.cebola = this.data.product[i].urlimg;
        this.name.cebola = this.data.product[i].name;
        this.price.cebola = this.data.product[i].price;
        console.log(this.url.cebola)
        console.log(this.name.cebola)
        console.log(this.price.cebola);
      }

      if (this.data.product[i].id == '3') {
        this.url.alface = this.data.product[i].urlimg;
        this.name.alface = this.data.product[i].name;
        this.price.alface = this.data.product[i].price;
        console.log(this.url.alface)
        console.log(this.name.alface)
        console.log(this.price.alface);
      }

      if (this.data.product[i].id == '4') {
        this.url.cheedar = this.data.product[i].urlimg;
        this.name.cheedar = this.data.product[i].name;
        this.price.cheedar = this.data.product[i].price;
        console.log(this.url.cheedar)
        console.log(this.name.cheedar)
        console.log(this.price.cheedar);
      }

      if (this.data.product[i].id == '5') {
        this.url.milho = this.data.product[i].urlimg;
        this.name.milho = this.data.product[i].name;
        this.price.milho = this.data.product[i].price;
        console.log(this.url.milho)
        console.log(this.name.milho)
        console.log(this.price.milho);
      }

      if (this.data.product[i].id == '6') {
        this.url.batata_palha = this.data.product[i].urlimg;
        this.name.batata_palha = this.data.product[i].name;
        this.price.batata_palha = this.data.product[i].price;
        console.log(this.url.batata_palha)
        console.log(this.name.batata_palha)
        console.log(this.price.batata_palha);
      }

      if (this.data.product[i].id == '7') {
        this.url.pepino_japones = this.data.product[i].urlimg;
        this.name.pepino_japones = this.data.product[i].name;
        this.price.pepino_japones = this.data.product[i].price;
        console.log(this.url.pepino_japones)
        console.log(this.name.pepino_japones)
        console.log(this.price.pepino_japones);
      }

      if (this.data.product[i].id == '8') {
        this.url.carne = this.data.product[i].urlimg;
        this.name.carne = this.data.product[i].name;
        this.price.carne = this.data.product[i].price;
        console.log(this.url.carne)
        console.log(this.name.carne)
        console.log(this.price.carne);
      }

      if (this.data.product[i].id == '9') {
        this.url.frango = this.data.product[i].urlimg;
        this.name.frango = this.data.product[i].name;
        this.price.frango = this.data.product[i].price;
        console.log(this.url.frango)
        console.log(this.name.frango)
        console.log(this.price.frango);
      }

      if (this.data.product[i].id == '10') {
        this.url.calabresa = this.data.product[i].urlimg;
        this.name.calabresa = this.data.product[i].name;
        this.price.calabresa = this.data.product[i].price;
        console.log(this.url.calabresa)
        console.log(this.name.calabresa)
        console.log(this.price.calabresa);
      }

      if (this.data.product[i].id == '11') {
        this.url.presunto = this.data.product[i].urlimg;
        this.name.presunto = this.data.product[i].name;
        this.price.presunto = this.data.product[i].price;
        console.log(this.url.presunto)
        console.log(this.name.presunto)
        console.log(this.price.presunto);
      }

      if (this.data.product[i].id == '12') {
        this.url.bacon = this.data.product[i].urlimg;
        this.name.bacon = this.data.product[i].name;
        this.price.bacon = this.data.product[i].price;
        console.log(this.url.bacon)
        console.log(this.name.bacon)
        console.log(this.price.bacon);
      }

      if (this.data.product[i].id == '13') {
        this.url.ovo = this.data.product[i].urlimg;
        this.name.ovo = this.data.product[i].name;
        this.price.ovo = this.data.product[i].price;
        console.log(this.url.ovo)
        console.log(this.name.ovo)
        console.log(this.price.ovo);
      }

      if (this.data.product[i].id == '14') {
        this.url.batatas_fritas = this.data.product[i].urlimg;
        this.name.batatas_fritas = this.data.product[i].name;
        this.price.batatas_fritas = this.data.product[i].price;
        console.log(this.url.batatas_fritas)
        console.log(this.name.batatas_fritas)
        console.log(this.price.batatas_fritas);
      }

      if (this.data.product[i].id == '15') {
        this.url.coca_cola_2l = this.data.product[i].urlimg;
        this.name.coca_cola_2l = this.data.product[i].name;
        this.price.coca_cola_2l = this.data.product[i].price;
        console.log(this.url.coca_cola_2l)
        console.log(this.name.coca_cola_2l)
        console.log(this.price.coca_cola_2l);
      }

      if (this.data.product[i].id == '16') {
        this.url.coca_cola_350ml = this.data.product[i].urlimg;
        this.name.coca_cola_350ml = this.data.product[i].name;
        this.price.coca_cola_350ml = this.data.product[i].price;
        console.log(this.url.coca_cola_350ml)
        console.log(this.name.coca_cola_350ml)
        console.log(this.price.coca_cola_350ml);
      }

      if (this.data.product[i].id == '17') {
        this.url.fanta_guarana_2l = this.data.product[i].urlimg;
        this.name.fanta_guarana_2l = this.data.product[i].name;
        this.price.fanta_guarana_2l = this.data.product[i].price;
        console.log(this.url.fanta_guarana_2l)
        console.log(this.name.fanta_guarana_2l)
        console.log(this.price.fanta_guarana_2l);
      }

      if (this.data.product[i].id == '18') {
        this.url.fanta_laranja_2l = this.data.product[i].urlimg;
        this.name.fanta_laranja_2l = this.data.product[i].name;
        this.price.fanta_laranja_2l = this.data.product[i].price;
        console.log(this.url.fanta_laranja_2l)
        console.log(this.name.fanta_laranja_2l)
        console.log(this.price.fanta_laranja_2l);
      }

      if (this.data.product[i].id == '19') {
        this.url.fanta_uva_2l = this.data.product[i].urlimg;
        this.name.fanta_uva_2l = this.data.product[i].name;
        this.price.fanta_uva_2l = this.data.product[i].price;
        console.log(this.url.fanta_uva_2l)
        console.log(this.name.fanta_uva_2l)
        console.log(this.price.fanta_uva_2l);
      }

      if (this.data.product[i].id == '20') {
        this.url.sprite = this.data.product[i].urlimg;
        this.name.sprite = this.data.product[i].name;
        this.price.sprite = this.data.product[i].price;
        console.log(this.url.sprite)
        console.log(this.name.sprite)
        console.log(this.price.sprite);
      }

      if (this.data.product[i].id == '21') {
        this.url.coca_cola_600ml = this.data.product[i].urlimg;
        this.name.coca_cola_600ml = this.data.product[i].name;
        this.price.coca_cola_600ml = this.data.product[i].price;
        console.log(this.url.coca_cola_600ml)
        console.log(this.name.coca_cola_600ml)
        console.log(this.price.coca_cola_600ml);
      }

      if (this.data.product[i].id == '22') {
        this.url.mostarda = this.data.product[i].urlimg;
        this.name.mostarda = this.data.product[i].name;
        this.price.mostarda = this.data.product[i].price;
        console.log(this.url.mostarda)
        console.log(this.name.mostarda)
        console.log(this.price.mostarda);
      }

      if (this.data.product[i].id == '23') {
        this.url.ketchup = this.data.product[i].urlimg;
        this.name.ketchup = this.data.product[i].name;
        this.price.ketchup = this.data.product[i].price;
        console.log(this.url.ketchup)
        console.log(this.name.ketchup)
        console.log(this.price.ketchup);
      }

      if (this.data.product[i].id == '24') {
        this.url.maionese = this.data.product[i].urlimg;
        this.name.maionese = this.data.product[i].name;
        this.price.maionese = this.data.product[i].price;
        console.log(this.url.maionese)
        console.log(this.name.maionese)
        console.log(this.price.maionese);
      }

      if (this.data.product[i].id == '25') {
        this.url.pao = this.data.product[i].urlimg;
        this.name.pao = this.data.product[i].name;
        this.price.pao = this.data.product[i].price;
        console.log(this.url.pao)
        console.log(this.name.pao)
        console.log(this.price.pao);
      }

    }



  }



  // public getProducts() {

  //   this.productsService.getProducts()
  //     .subscribe(
  //       (data) => {
  //         this.data = data;
  //         console.log("Datsososjdnhijts", this.data);
  //         this.products = this.data.products;
  //         // this.successfully = true;         
  //         console.log("Products", this.products);
  //       },
  //       (error) => {
  //         console.log(error);
  //       });
  // }

  onSubmit(dataObj): void {

    this.order2 = dataObj.form.value;
    console.log(this.order);
    console.log(this.order2);
    console.log(this.order.cebola);
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = this.order;

    this.dialog.open(ShoppingcartComponent, dialogConfig);  


  }

  // Function for one ingredient
  updateCost() {

    var total = [];

    var i = 0;
    var itemid = 'item_' + i;
    var elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_0") {
      this.tomate_price = this.price.tomate;
    }

    console.log('Ingredient price:', this.tomate_price);
    console.log('Ingredient quantity:', this.order.tomate.quantity);
    console.log('Selected?', this.order.tomate.selected)

    if (this.order.tomate.selected) {
      this.order.tomate.price = this.tomate_price * this.order.tomate.quantity;
      console.log('Tomate Total Price', this.order.tomate.price);
      var list = total.push(this.order.tomate.price);
    }

    i = 1;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_1") {
      this.cebola_price = this.price.cebola;
    }

    console.log('Ingredient price:', this.cebola_price);
    console.log('Ingredient quantity:', this.order.cebola.quantity);
    console.log('Selected?', this.order.cebola.selected);

    if (this.order.cebola.selected) {
      this.order.cebola.price = this.cebola_price * this.order.cebola.quantity;
      console.log('Cebola Total Price', this.order.cebola.price);
      var list = total.push(this.order.cebola.price);
    }

    i = 2;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_2") {
      this.alface_price = this.price.alface;
    }

    console.log('Ingredient price:', this.alface_price);
    console.log('Ingredient quantity:', this.order.alface.quantity);
    console.log('Selected?', this.order.alface.selected);

    if (this.order.alface.selected) {
      this.order.alface.price = this.alface_price * this.order.alface.quantity;
      console.log('Alface Total Price', this.order.alface.price);
      var list = total.push(this.order.alface.price);
    }

    i = 3;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_3") {
      this.cheedar_price = this.price.cheedar;
    }

    console.log('Ingredient price:', this.cheedar_price);
    console.log('Ingredient quantity:', this.order.cheedar.quantity);
    console.log('Selected?', this.order.cheedar.selected);

    if (this.order.cheedar.selected) {
      this.order.cheedar.price = this.cheedar_price * this.order.cheedar.quantity;
      console.log('Cheedar Total Price', this.order.cheedar.price);
      var list = total.push(this.order.cheedar.price);
    }

    i = 4;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_4") {
      this.milho_price = this.price.milho;
    }

    console.log('Ingredient price:', this.milho_price);
    console.log('Ingredient quantity:', this.order.milho.quantity);
    console.log('Selected?', this.order.milho.selected);

    if (this.order.milho.selected) {
      this.order.milho.price = this.milho_price * this.order.milho.quantity;
      console.log('Milho Total Price', this.order.milho.price);
      var list = total.push(this.order.milho.price);
    }

    i = 5;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_5") {
      this.batata_palha_price = this.price.batata_palha;
    }

    console.log('Ingredient price:', this.batata_palha_price);
    console.log('Ingredient quantity:', this.order.batata_palha.quantity);
    console.log('Selected?', this.order.batata_palha.selected);

    if (this.order.batata_palha.selected) {
      this.order.batata_palha.price = this.batata_palha_price * this.order.batata_palha.quantity;
      console.log('Batata_Palha Total Price', this.order.batata_palha.price);
      var list = total.push(this.order.batata_palha.price);
    }

    i = 6;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_6") {
      this.pepino_japones_price = this.price.pepino_japones;
    }

    console.log('Ingredient price:', this.pepino_japones_price);
    console.log('Ingredient quantity:', this.order.pepino_japones.quantity);
    console.log('Selected?', this.order.pepino_japones.selected);

    if (this.order.pepino_japones.selected) {
      this.order.pepino_japones.price = this.pepino_japones_price * this.order.pepino_japones.quantity;
      console.log('Pepino_Japonês Total Price', this.order.pepino_japones.price);
      var list = total.push(this.order.pepino_japones.price);
    }

    i = 7;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_7") {
      this.carne_price = this.price.carne;
    }

    console.log('Ingredient price:', this.carne_price);
    console.log('Ingredient quantity:', this.order.carne.quantity);
    console.log('Selected?', this.order.carne.selected);

    if (this.order.carne.selected) {
      this.order.carne.price = this.carne_price * this.order.carne.quantity;
      console.log('Carne Total Price', this.order.carne.price);
      var list = total.push(this.order.carne.price);
    }

    i = 8;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_8") {
      this.frango_price = this.price.frango;
    }

    console.log('Ingredient price:', this.frango_price);
    console.log('Ingredient quantity:', this.order.frango.quantity);
    console.log('Selected?', this.order.frango.selected);

    if (this.order.frango.selected) {
      this.order.frango.price = this.frango_price * this.order.frango.quantity;
      console.log('Frango Total Price', this.order.frango.price);
      var list = total.push(this.order.frango.price);
    }

    i = 9;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_9") {
      this.calabresa_price = this.price.calabresa;
    }

    console.log('Ingredient price:', this.calabresa_price);
    console.log('Ingredient quantity:', this.order.calabresa.quantity);
    console.log('Selected?', this.order.calabresa.selected);

    if (this.order.calabresa.selected) {
      this.order.calabresa.price = this.calabresa_price * this.order.calabresa.quantity;
      console.log('Calabresa Total Price', this.order.calabresa.price);
      var list = total.push(this.order.calabresa.price);
    }

    i = 10;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_10") {
      this.presunto_price = this.price.presunto;
    }

    console.log('Ingredient price:', this.presunto_price);
    console.log('Ingredient quantity:', this.order.presunto.quantity);
    console.log('Selected?', this.order.presunto.selected);

    if (this.order.presunto.selected) {
      this.order.presunto.price = this.presunto_price * this.order.presunto.quantity;
      console.log('Presunto Total Price', this.order.presunto.price);
      var list = total.push(this.order.presunto.price);
    }

    i = 11;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_11") {
      this.bacon_price = this.price.bacon;
    }

    console.log('Ingredient price:', this.bacon_price);
    console.log('Ingredient quantity:', this.order.bacon.quantity);
    console.log('Selected?', this.order.bacon.selected);

    if (this.order.bacon.selected) {
      this.order.bacon.price = this.bacon_price * this.order.bacon.quantity;
      console.log('Bacon Total Price', this.order.bacon.price);
      var list = total.push(this.order.bacon.price);
    }

    i = 12;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_12") {
      this.ovo_price = this.price.ovo;
    }

    console.log('Ingredient price:', this.ovo_price);
    console.log('Ingredient quantity:', this.order.ovo.quantity);
    console.log('Selected?', this.order.ovo.selected);

    if (this.order.ovo.selected) {
      this.order.ovo.price = this.ovo_price * this.order.ovo.quantity;
      console.log('Ovo Total Price', this.order.ovo.price);
      var list = total.push(this.order.ovo.price);
    }

    i = 13;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_13") {
      this.batatas_fritas_price = this.price.batatas_fritas;
    }

    console.log('Ingredient price:', this.batatas_fritas_price);
    console.log('Ingredient quantity:', this.order.batatas_fritas.quantity);
    console.log('Selected?', this.order.batatas_fritas.selected);

    if (this.order.batatas_fritas.selected) {
      this.order.batatas_fritas.price = this.batatas_fritas_price * this.order.batatas_fritas.quantity;
      console.log('Batatas_Fritas Total Price', this.order.batatas_fritas.price);
      var list = total.push(this.order.batatas_fritas.price);
    }

    i = 14;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_14") {
      this.coca_cola_2l_price = this.price.coca_cola_2l;
    }

    console.log('Ingredient price:', this.coca_cola_2l_price);
    console.log('Ingredient quantity:', this.order.coca_cola_2l.quantity);
    console.log('Selected?', this.order.coca_cola_2l.selected);

    if (this.order.coca_cola_2l.selected) {
      this.order.coca_cola_2l.price = this.coca_cola_2l_price * this.order.coca_cola_2l.quantity;
      console.log('Coca_Cola_2l Total Price', this.order.coca_cola_2l.price);
      var list = total.push(this.order.coca_cola_2l.price);
    }

    i = 15;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_15") {
      this.coca_cola_350ml_price = this.price.coca_cola_350ml;
    }

    console.log('Ingredient price:', this.coca_cola_350ml_price);
    console.log('Ingredient quantity:', this.order.coca_cola_350ml.quantity);
    console.log('Selected?', this.order.coca_cola_350ml.selected);

    if (this.order.coca_cola_350ml.selected) {
      this.order.coca_cola_350ml.price = this.coca_cola_350ml_price * this.order.coca_cola_350ml.quantity;
      console.log('Coca_Cola_350ml Total Price', this.order.coca_cola_350ml.price);
      var list = total.push(this.order.coca_cola_350ml.price);
    }

    i = 16;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_16") {
      this.fanta_guarana_2l_price = this.price.fanta_guarana_2l;
    }

    console.log('Ingredient price:', this.fanta_guarana_2l_price);
    console.log('Ingredient quantity:', this.order.fanta_guarana_2l.quantity);
    console.log('Selected?', this.order.fanta_guarana_2l.selected);

    if (this.order.fanta_guarana_2l.selected) {
      this.order.fanta_guarana_2l.price = this.fanta_guarana_2l_price * this.order.fanta_guarana_2l.quantity;
      console.log('Fanta Guaraná 2L Total Price', this.order.fanta_guarana_2l.price);
      var list = total.push(this.order.fanta_guarana_2l.price);
    }

    i = 17;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_17") {
      this.fanta_laranja_2l_price = this.price.fanta_laranja_2l;
    }

    console.log('Ingredient price:', this.fanta_laranja_2l_price);
    console.log('Ingredient quantity:', this.order.fanta_laranja_2l.quantity);
    console.log('Selected?', this.order.fanta_laranja_2l.selected);

    if (this.order.fanta_laranja_2l.selected) {
      this.order.fanta_laranja_2l.price = this.fanta_laranja_2l_price * this.order.fanta_laranja_2l.quantity;
      console.log('Fanta Laranja 2L Total Price', this.order.fanta_laranja_2l.price);
      var list = total.push(this.order.fanta_laranja_2l.price);
    }

    i = 18;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_18") {
      this.fanta_uva_2l_price = this.price.fanta_uva_2l;
    }

    console.log('Ingredient price:', this.fanta_uva_2l_price);
    console.log('Ingredient quantity:', this.order.fanta_uva_2l.quantity);
    console.log('Selected?', this.order.fanta_uva_2l.selected);

    if (this.order.fanta_uva_2l.selected) {
      this.order.fanta_uva_2l.price = this.fanta_uva_2l_price * this.order.fanta_uva_2l.quantity;
      console.log('Fanta Uva 2L Total Price', this.order.fanta_uva_2l.price);
      var list = total.push(this.order.fanta_uva_2l.price);
    }

    i = 19;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_19") {
      this.sprite_price = this.price.sprite;
    }

    console.log('Ingredient price:', this.sprite_price);
    console.log('Ingredient quantity:', this.order.sprite.quantity);
    console.log('Selected?', this.order.sprite.selected);

    if (this.order.sprite.selected) {
      this.order.sprite.price = this.sprite_price * this.order.sprite.quantity;
      console.log('Sprite Total Price', this.order.sprite.price);
      var list = total.push(this.order.sprite.price);
    }

    i = 20;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_20") {
      this.coca_cola_600ml_price = this.price.coca_cola_600ml;
    }

    console.log('Ingredient price:', this.coca_cola_600ml_price);
    console.log('Ingredient quantity:', this.order.coca_cola_600ml.quantity);
    console.log('Selected?', this.order.coca_cola_600ml.selected);

    if (this.order.coca_cola_600ml.selected) {
      this.order.coca_cola_600ml.price = this.coca_cola_600ml_price * this.order.coca_cola_600ml.quantity;
      console.log('Coca_Cola_600ml Total Price', this.order.coca_cola_600ml.price);
      var list = total.push(this.order.coca_cola_600ml.price);
    }

    i = 21;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_21") {
      this.mostarda_price = this.price.mostarda;
    }

    console.log('Ingredient price:', this.mostarda_price);
    console.log('Ingredient quantity:', this.order.mostarda.quantity);
    console.log('Selected?', this.order.mostarda.selected);

    if (this.order.mostarda.selected) {
      this.order.mostarda.price = this.mostarda_price * this.order.mostarda.quantity;
      console.log('Mostarda Total Price', this.order.mostarda.price);
      var list = total.push(this.order.mostarda.price);
    }

    i = 22;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_22") {
      this.ketchup_price = this.price.ketchup;
    }

    console.log('Ingredient price:', this.ketchup_price);
    console.log('Ingredient quantity:', this.order.ketchup.quantity);
    console.log('Selected?', this.order.ketchup.selected);

    if (this.order.ketchup.selected) {
      this.order.ketchup.price = this.ketchup_price * this.order.ketchup.quantity;
      console.log('Ketchup Total Price', this.order.ketchup.price);
      var list = total.push(this.order.ketchup.price);
    }

    i = 23;
    itemid = 'item_' + i;
    elem = document.getElementById(itemid);
    console.log(elem)

    if (elem.id = "item_23") {
      this.maionese_price = this.price.maionese;
    }

    console.log('Ingredient price:', this.maionese_price);
    console.log('Ingredient quantity:', this.order.maionese.quantity);
    console.log('Selected?', this.order.maionese.selected);

    if (this.order.maionese.selected) {
      this.order.maionese.price = this.maionese_price * this.order.maionese.quantity;
      console.log('Ketchup Total Price', this.order.maionese.price);
      var list = total.push(this.order.maionese.price);
    }

    // var Total = this.order.tomate.price + this.order.cebola.price + this.order.alface.price + this.order.cheedar.price;


    console.log('Array', total)



    console.log('Total',
      total.reduce((a, b) => a + b, 0) + this.price.pao
    )

    this.displayTotal = total.reduce((a, b) => a + b, 0) + this.price.pao;
  }

}
