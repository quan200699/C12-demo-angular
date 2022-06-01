import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {AuthGuard} from '../helper/auth.guard';
import {AdminAuthGuard} from '../helper/admin-auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ProductListComponent
  },
  {
    path: 'create',
    canActivate: [AdminAuthGuard],
    component: ProductCreateComponent
  },
  {
    path: 'edit/:id',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
