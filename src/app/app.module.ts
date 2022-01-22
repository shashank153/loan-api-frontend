import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RapipayHeaderComponent } from './rapipay-header/rapipay-header.component';
import { RapipayHomeComponent } from './rapipay-home/rapipay-home.component';
import { GetSingleProductComponent } from './get-single-product/get-single-product.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';
import { ApiHomeComponent } from './api-home/api-home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { PostProductComponent } from './post-product/post-product.component';


@NgModule({
  declarations: [
    AppComponent,
    RapipayHeaderComponent,
    RapipayHomeComponent,
    GetSingleProductComponent,
    GetAllProductsComponent,
    ApiHomeComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    UpdateProductComponent,
    PostProductComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
