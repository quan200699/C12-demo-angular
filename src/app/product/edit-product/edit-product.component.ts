import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.getProductById(id);
    });
  }

  get nameControl() {
    return this.productForm.get('name');
  }

  get idControl() {
    return this.productForm.get('id');
  }

  ngOnInit() {
  }

  getProductById(id) {
    this.productService.findById(id).subscribe((product) => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name, [Validators.required]),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  update() {
    this.productService.update(this.idControl.value, this.productForm.value).subscribe(() => {
      alert('thanh cong');
    });
  }
}
