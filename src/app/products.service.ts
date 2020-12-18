import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PRODUCTS_API = 'http://localhost:3000/v1/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  arr = [];
  constructor(private http: HttpClient) { }

  getProducts() {
     this.http.get(PRODUCTS_API).subscribe(x => this.arr.push(x))
     return this.arr
  }
}
