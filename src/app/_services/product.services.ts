import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../_model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
  private products: Product[];

  productAdded = new EventEmitter<Product>();

  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get(`${this.baseUrl}product`);
  }

  getProductById(id) {
    return this.httpClient.get(`${this.baseUrl}product/${id}`);
  }

  addProduct(product) {
    let body = {
      discount: product.discount,
      price: product.price,
      imagesUrls: product.imagesUrls,
      data: product.data,
      categoryId: product.categoryId,
      paymentTypes: product.paymentTypes,
    };

    // const token = localStorage.getItem('token');
    // console.log(token);

    // const headers = new HttpHeaders({
    //   authorization: token,
    // });

    return this.httpClient.post(`${this.baseUrl}product/add`, body);
  }

  updateProduct(product: Product) {
    const index = this.products.findIndex((p) => {
      p.id === product.id;
    });

    // this.products[index] = {
    //   id: product.id,
    //   data: product.data,
    //   price: product.price,
    //   discount: product.discount,
    //   categoryId: product.categoryId,
    //   imagesUrls: product.imagesUrls,
    //   paymentTypes: product.paymentTypes,
    //   tags: product.tags,
    // };
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((p) => {
      p.id === id;
    });

    this.products.splice(index, 1);
  }
}
