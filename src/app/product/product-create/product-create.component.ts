import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  categories: Category[] = [];
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  get nameControl() {
    return this.productForm.get('name');
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  //Template
  // createProduct(form) {
  //   this.productService.create(form.value);
  //   form.resetForm();
  //   // this.router.navigateByUrl('/');
  // }

  //reactive
  createProductUsingReactiveForm() {
    let data = this.productForm.value;
    let categoryId = data.category;
    data.category = {
      id: categoryId
    }
    this.productService.create(data).subscribe(() => {
      alert('Taoj thanhf cong');
      this.productForm.reset();
    });
  }

}
