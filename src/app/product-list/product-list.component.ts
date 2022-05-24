import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product = {};
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 13',
      price: 320000,
      description: 'new'
    },
    {
      id: 2,
      name: 'IPhone 2',
      price: 220000,
      description: 'new'
    },
    {
      id: 3,
      name: 'IPhone 11',
      price: 120000,
      description: 'new'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
