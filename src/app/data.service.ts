import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";

class Product {
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URI = "http://localhost:3030/api/products";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  getSingleProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(this.URI + '/' + productId)
  }

  getAllProducts(): Observable<Product> {
    return this.http.get<Product>(this.URI)
  }

  deleteProductById(productId: number) {
    // console.log(productId)
    return this.http.delete<Product>(this.URI + '/' + productId, this.httpOptions);
  }

  updateProduct(data: any){
    return this.http.put<Product>(this.URI , data);
  }

  calculateEmi(productId: any) {
    return this.http.get<Product>(this.URI + '/calculate-emi/' + productId);
  }

  postProduct(data: any) {
    return this.http.post<Product>(this.URI, data);
  }
}
