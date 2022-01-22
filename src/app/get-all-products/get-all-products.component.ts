import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {
  products: any = [];
  constructor(private dataServices: DataService) { }

  ngOnInit(): void {
    this.dataServices.getAllProducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    })
  }

  delete(productId: number) {
    // console.log(productId)
    if (window.confirm('Are you sure want to delete?')) {
      this.dataServices.deleteProductById(productId).subscribe(data => {
        this.ngOnInit();
      })
    }
  }

  editProduct = new FormGroup({
    productId:new FormControl(''),
    productName: new FormControl(''),
    createdBy: new FormControl(''),
    createdOn: new FormControl(''),
    updatedOn: new FormControl(''),
    principalAmount: new FormControl(''),
    tenure: new FormControl(''),
    rateOfInterest:new FormControl(''),
    updatedBy: new FormControl('')
  })
  product: any;
  productId: any;
  editProductData(productId: number) {
    this.dataServices.getSingleProduct(productId).subscribe((data: any) => {
      this.product = data;
      this.productId = productId;
      // console.log(data);
      this.editProduct = new FormGroup({
        productId: new FormControl(data['productId']),
        productName: new FormControl(data['productName']),
        createdBy: new FormControl(data['createdBy']),
        createdOn: new FormControl(data['createdOn']),
        updatedOn: new FormControl(data['updatedOn']),
        principalAmount: new FormControl(data['principalAmount']),
        rateOfInterest:new FormControl(data['rateOfInterest']),
        tenure: new FormControl(data['tenure']),
        updatedBy: new FormControl(data['updatedBy'])
      })
    })
  }

  updateProduct(productId: number) {
    this.dataServices.updateProduct(this.editProduct.value).subscribe((result) => {
      console.log(result, ' updated successfully!!');
      this.ngOnInit();
    });
  }

  // public emi:any;
  calculateEmi(productId: any) {
    this.dataServices.calculateEmi(productId).subscribe((data: any) => {
      console.log(data)
      alert("Emi for product id: " + productId + " is: " + data)
    })
  }
}
