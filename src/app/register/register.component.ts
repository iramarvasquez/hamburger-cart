import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  myForm: FormGroup
  order: any = {
    name: {}
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      // email: new FormControl(''),
      // password: new FormControl('')
      name: new FormControl(''),
      selected: new FormControl(''),
      quantity: new FormControl(''),
      price: new FormControl(''),
    })
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.order.name = this.myForm.value.name;
    this.order.name.selected = this.myForm.value.selected;
    this.order.name.quantity = this.myForm.value.quantity;
    this.order.name.price = this.myForm.value.price;

    console.log(this.order);
   }


}

