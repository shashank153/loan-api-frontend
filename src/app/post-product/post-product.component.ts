import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../data.service";

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {
  postProduct = new FormGroup({
    productName: new FormControl('', Validators.required),
    createdBy: new FormControl(''),
    principalAmount: new FormControl(''),
    tenure: new FormControl(''),
    rateOfInterest: new FormControl(''),
    updatedBy: new FormControl(''),
  });

  alert: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }


  submitProductData() {
    this.dataService.postProduct(this.postProduct.value).subscribe((data: any) => {
      this.alert = true;
    })
  }
}
