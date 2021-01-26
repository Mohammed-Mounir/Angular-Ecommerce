import { Component } from '@angular/core';
import { Product } from './_model/product';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  productsArray: Product[] = [];

  totalPrice: number = 0;

  addToCartAtHeader(product: Product) {
    this.productsArray.push(product);
    if (product.discount) {
      this.totalPrice += product.price - product.discount;
    } else {
      this.totalPrice += product.price;
    }
  }
}
