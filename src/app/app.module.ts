import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {SharedModule} from './shared/shared.module';
import {LoginComponent} from './auth/login/login.component';
import {JwtInterceptor} from './helper/jwt-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
