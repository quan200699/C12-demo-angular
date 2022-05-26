import {Injectable} from '@angular/core';
import {Product} from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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

  constructor() {
  }

  getAll(): Product[] {
    return this.products;
  }

  findById(id): Product {
    //ES6
    this.products.map(product => {
      if (product.id === id) {
        return product;
      }
    });
    return null;
  }

  create(product): Product {
    this.products.push(product);
    return product;
  }

  updateById(id, product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products[i] = product;
      }
    }
  }

  delete(id) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        index = i;
      }
    }
    this.products.splice(index, 1);
  }
}
