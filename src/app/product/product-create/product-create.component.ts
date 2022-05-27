import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductService,
              private router: Router) {
  }

  get nameControl() {
    return this.productForm.get('name');
  }

  ngOnInit() {
  }

  //Template
  // createProduct(form) {
  //   this.productService.create(form.value);
  //   form.resetForm();
  //   // this.router.navigateByUrl('/');
  // }

  //reactive
  createProductUsingReactiveForm() {
    this.productService.create(this.productForm.value).subscribe(() => {
      alert('Taoj thanhf cong');
      this.productForm.reset();
    });
  }

}
