import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getProducts() {
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.get(environment.url.products);
  }

  postPedido(data) {
    console.log('espera de backend', data);
    return this.http.post(environment.url.pedido, data);
  }

  // postProducts(id, data) {
  //   const headers = new Headers();
  //   // headers.append('Content-Type', 'application/json');
  //   return this.http.post(environment.url.products + id + '/students', data);
  // } 
}
