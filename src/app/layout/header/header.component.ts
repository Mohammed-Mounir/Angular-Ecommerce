import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  cartArray: Product[] = [];

  toggleClass = false;
  newCart = [];
  index = null;

  @Input() totalPrice: number;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res) => {
        this.index = this.cartArray.indexOf(res);

        if (this.index >= 0) {
          this.newCart[this.index].quantity += 1;
        } else {
          this.cartArray.push(res);
          res.quantity = 1;
          this.newCart.push(res);
        }
        console.log(this.newCart);
      },
      (err) => {
        console.error(err);
      },
      (completed) => {
        alert('Subscribe Operation Compeleted');
      }
    );
  }

  ngOnChanges(changes) {}

  calculateTotalAmount(): number {
    let total = 0;

    for (let index = 0; index < this.newCart.length; index++) {
      const product = this.newCart[index];

      total += product.discount
        ? (product.price - product.discount) * product.quantity
        : product.price * product.quantity;
    }
    return total;
  }

  removeItem(i) {
    this.cartArray.splice(i, 1);
    this.newCart.splice(i, 1);
  }
}
