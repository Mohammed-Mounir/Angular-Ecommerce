import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../_model/product-category';

@Injectable()
export class ProductCategoryService {
  productCategory: ProductCategory[] = [];

  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';

  constructor(private httpClient: HttpClient) {}

  getAllProductCategory() {
    return this.httpClient.get(`${this.baseUrl}category`);
  }
}
