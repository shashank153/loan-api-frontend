import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RapipayHomeComponent} from "./rapipay-home/rapipay-home.component";
import {GetSingleProductComponent} from "./get-single-product/get-single-product.component";
import {ApiHomeComponent} from "./api-home/api-home.component";
import {LandingComponent} from "./landing/landing.component";
import {GetAllProductsComponent} from "./get-all-products/get-all-products.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {UpdateProductComponent} from "./update-product/update-product.component";
import {PostProductComponent} from "./post-product/post-product.component";

const routes: Routes = [
  {
    path:'',
    component:LandingComponent
  },
  {
    path:'home',
    component:RapipayHomeComponent
  },
  {
    path:'get-single-product',
    component: GetSingleProductComponent,
  },
  {
    path:'api-home',
    component:ApiHomeComponent,
  },
  {
    path:'landing-page',
    component:LandingComponent
  },
  {
    path:'get-all-products',
    component:GetAllProductsComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'post-product',
    component:PostProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
