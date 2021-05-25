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

  
  product: any = {
    id: "1",
    checked: "true",
    quantity: "1"
  }
  
  quantity: any = {
    tomate: "1",
    cebola: "1"
  }

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

  valor_price: any;
  order2: any;



  constructor(private productsService: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public async getProducts() {
    const promise = await this.productsService.getProducts().toPromise();
    this.data = promise;
    console.log(this.data.product[0]);

    for (let i = 0; i < this.data.product.length; i++) {
      if (this.data.product[i].name == 'Tomate') {

        this.url.tomate = this.data.product[i].urlimg;
        this.name.tomate = this.data.product[i].name;
        this.price.tomate = this.data.product[i].price;
        console.log(this.url.tomate)
        console.log(this.name.tomate)
        console.log(this.price.tomate);
        //console.log(this.data.product[i].name);]
      }

      if (this.data.product[i].name == 'Cebola') {
        this.url.cebola = this.data.product[i].urlimg;
        this.name.cebola = this.data.product[i].name;
        this.price.cabola = this.data.product[i].price;
        console.log(this.url.cebola)
        console.log(this.name.cebola)
        console.log(this.price.cebola);
      }

      if (this.data.product[i].name == 'Alface') {
        this.url.alface = this.data.product[i].urlimg;
        this.name.alface = this.data.product[i].name;
        this.price.alface = this.data.product[i].price;
        console.log(this.url.alface)
        console.log(this.name.alface)
        console.log(this.price.alface);
      }

      if (this.data.product[i].name == 'Cheedar') {
        this.url.cheedar = this.data.product[i].urlimg;
        this.name.cheedar = this.data.product[i].name;
        this.price.cheedar = this.data.product[i].price;
        console.log(this.url.cheedar)
        console.log(this.name.cheedar)
        console.log(this.price.cheedar);
      }

      if (this.data.product[i].name == 'Milho') {
        this.url.milho = this.data.product[i].urlimg;
        this.name.milho = this.data.product[i].name;
        this.price.milho = this.data.product[i].price;
        console.log(this.url.milho)
        console.log(this.name.milho)
        console.log(this.price.milho);
      }

      if (this.data.product[i].name == 'Batata Palha') {
        this.url.batata_palha = this.data.product[i].urlimg;
        this.name.batata_palha = this.data.product[i].name;
        this.price.batata_palha = this.data.product[i].price;
        console.log(this.url.batata_palha)
        console.log(this.name.batata_palha)
        console.log(this.price.batata_palha);
      }

      if (this.data.product[i].name == 'Pepino Japonês') {
        this.url.pepino_japones = this.data.product[i].urlimg;
        this.name.pepino_japones = this.data.product[i].name;
        this.price.pepino_japones = this.data.product[i].price;
        console.log(this.url.pepino_japones)
        console.log(this.name.pepino_japones)
        console.log(this.price.pepino_japones);
      }

      if (this.data.product[i].name == 'Carne') {
        this.url.carne = this.data.product[i].urlimg;
        this.name.carne = this.data.product[i].name;
        this.price.carne = this.data.product[i].price;
        console.log(this.url.carne)
        console.log(this.name.carne)
        console.log(this.price.carne);
      }

      if (this.data.product[i].name == 'Frango') {
        this.url.frango = this.data.product[i].urlimg;
        this.name.frango = this.data.product[i].name;
        this.price.frango = this.data.product[i].price;
        console.log(this.url.frango)
        console.log(this.name.frango)
        console.log(this.price.frango);
      }

      if (this.data.product[i].name == 'Calabresa') {
        this.url.calabresa = this.data.product[i].urlimg;
        this.name.calabresa = this.data.product[i].name;
        this.price.calabresa = this.data.product[i].price;
        console.log(this.url.calabresa)
        console.log(this.name.calabresa)
        console.log(this.price.calabresa);
      }

      if (this.data.product[i].name == 'Presunto') {
        this.url.presunto = this.data.product[i].urlimg;
        this.name.presunto = this.data.product[i].name;
        this.price.presunto = this.data.product[i].price;
        console.log(this.url.presunto)
        console.log(this.name.presunto)
        console.log(this.price.presunto);
      }

      if (this.data.product[i].name == 'Bacon') {
        this.url.bacon = this.data.product[i].urlimg;
        this.name.bacon = this.data.product[i].name;
        this.price.bacon = this.data.product[i].price;
        console.log(this.url.bacon)
        console.log(this.name.bacon)
        console.log(this.price.bacon);
      }

      if (this.data.product[i].name == 'Ovo') {
        this.url.ovo = this.data.product[i].urlimg;
        this.name.ovo = this.data.product[i].name;
        this.price.ovo = this.data.product[i].price;
        console.log(this.url.ovo)
        console.log(this.name.ovo)
        console.log(this.price.ovo);
      }

      if (this.data.product[i].name == 'Batatas Fritas') {
        this.url.batatas_fritas = this.data.product[i].urlimg;
        this.name.batatas_fritas = this.data.product[i].name;
        this.price.batatas_fritas = this.data.product[i].price;
        console.log(this.url.batatas_fritas)
        console.log(this.name.batatas_fritas)
        console.log(this.price.batatas_fritas);
      }

      if (this.data.product[i].name == 'Coca-Cola 2L') {
        this.url.coca_cola_2l = this.data.product[i].urlimg;
        this.name.coca_cola_2l = this.data.product[i].name;
        this.price.coca_cola_2l = this.data.product[i].price;
        console.log(this.url.coca_cola_2l)
        console.log(this.name.coca_cola_2l)
        console.log(this.price.coca_cola_2l);
      }

      if (this.data.product[i].name == 'Coca-Cola 350ml') {
        this.url.coca_cola_350ml = this.data.product[i].urlimg;
        this.name.coca_cola_350ml = this.data.product[i].name;
        this.price.coca_cola_350ml = this.data.product[i].price;
        console.log(this.url.coca_cola_350ml)
        console.log(this.name.coca_cola_350ml)
        console.log(this.price.coca_cola_350ml);
      }

      if (this.data.product[i].name == 'Coca_Cola 350ml') {
        this.url.coca_cola_350ml = this.data.product[i].urlimg;
        this.name.coca_cola_350ml = this.data.product[i].name;
        this.price.coca_cola_350ml = this.data.product[i].price;
        console.log(this.url.coca_cola_350ml)
        console.log(this.name.coca_cola_350ml)
        console.log(this.price.coca_cola_350ml);
      }

      if (this.data.product[i].name == 'Fanta Guaraná 2L') {
        this.url.fanta_guarana_2l = this.data.product[i].urlimg;
        this.name.fanta_guarana_2l = this.data.product[i].name;
        this.price.fanta_guarana_2l = this.data.product[i].price;
        console.log(this.url.fanta_guarana_2l)
        console.log(this.name.fanta_guarana_2l)
        console.log(this.price.fanta_guarana_2l);
      }

      if (this.data.product[i].name == 'Fanta Laranja 2L') {
        this.url.fanta_laranja_2l = this.data.product[i].urlimg;
        this.name.fanta_laranja_2l = this.data.product[i].name;
        this.price.fanta_laranja_2l = this.data.product[i].price;
        console.log(this.url.fanta_laranja_2l)
        console.log(this.name.fanta_laranja_2l)
        console.log(this.price.fanta_laranja_2l);
      }

      if (this.data.product[i].name == 'Fanta Uva 2L') {
        this.url.fanta_uva_2l = this.data.product[i].urlimg;
        this.name.fanta_uva_2l = this.data.product[i].name;
        this.price.fanta_uva_2l = this.data.product[i].price;
        console.log(this.url.fanta_uva_2l)
        console.log(this.name.fanta_uva_2l)
        console.log(this.price.fanta_uva_2l);
      }

      if (this.data.product[i].name == 'Sprite') {
        this.url.sprite = this.data.product[i].urlimg;
        this.name.sprite = this.data.product[i].name;
        this.price.sprite = this.data.product[i].price;
        console.log(this.url.sprite)
        console.log(this.name.sprite)
        console.log(this.price.sprite);
      }

      if (this.data.product[i].name == 'Coca-Cola 600ml') {
        this.url.coca_cola_600ml = this.data.product[i].urlimg;
        this.name.coca_cola_600ml = this.data.product[i].name;
        this.price.coca_cola_600ml = this.data.product[i].price;
        console.log(this.url.coca_cola_600ml)
        console.log(this.name.coca_cola_600ml)
        console.log(this.price.coca_cola_600ml);
      }

      if (this.data.product[i].name == 'Mostarda') {
        this.url.mostarda = this.data.product[i].urlimg;
        this.name.mostarda = this.data.product[i].name;
        this.price.mostarda = this.data.product[i].price;
        console.log(this.url.mostarda)
        console.log(this.name.mostarda)
        console.log(this.price.mostarda);
      }

      if (this.data.product[i].name == 'Ketchup') {
        this.url.ketchup = this.data.product[i].urlimg;
        this.name.ketchup = this.data.product[i].name;
        this.price.ketchup = this.data.product[i].price;
        console.log(this.url.ketchup)
        console.log(this.name.ketchup)
        console.log(this.price.ketchup);
      }

      if (this.data.product[i].name == 'Maionese') {
        this.url.maionese = this.data.product[i].urlimg;
        this.name.maionese = this.data.product[i].name;
        this.price.maionese = this.data.product[i].price;
        console.log(this.url.maionese)
        console.log(this.name.maionese)
        console.log(this.price.maionese);
      }

      if (this.data.product[i].name == 'Pão') {
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
  }

  // Function for one ingredient
  updateCost() {

    console.log('HEEEELP')

    for (let i = 0; i < this.data.product.length; i++) {
      if (this.data.product[i].name == 'Tomate') {

        this.url.tomate = this.data.product[i].urlimg;
        this.name.tomate = this.data.product[i].name;
        this.price.tomate = this.data.product[i].price;
        this.quantity.tomate = this.product.quantity;
        console.log(this.url.tomate)
        console.log(this.name.tomate)
        console.log(this.price.tomate);
        console.log(this.quantity.tomate);
        //console.log(this.data.product[i].name);]
      }
    }




    // var i = 0;
    // const itemid = 'item_' + i;
    // const elem = document.getElementById(itemid);

    // if (elem.id = "item_0") {
    //   this.valor_price = this.price.tomate;
    // }

    // console.log('Ingredient price:', this.valor_price);
    // console.log('Ingredient quantity', this.order.tomate.quantity);
    // console.log('Selected?', this.order.tomate.selected)

    // if (this.order.tomate.selected) {
    //   this.order.tomate.price = this.valor_price * this.order.tomate.quantity;
    //   console.log('Ingredient Total Price', this.order.tomate.price);
    // }


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
