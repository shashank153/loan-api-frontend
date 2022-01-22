import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-get-single-product',
  templateUrl: './get-single-product.component.html',
  styleUrls: ['./get-single-product.component.css']
})
export class GetSingleProductComponent implements OnInit {
  public product:any;
  constructor(private dataService: DataService) { }
  productId:number = 0;
  ngOnInit(): void {}

  getProductById(){
    this.dataService.getSingleProduct(this.productId).subscribe((data:any)=>{
      console.log(data);
      this.product = data;
    })
  }

}
