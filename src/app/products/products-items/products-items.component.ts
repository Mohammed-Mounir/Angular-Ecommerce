import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-products-items',
  templateUrl: './products-items.component.html',
  styleUrls: ['./products-items.component.scss'],
})
export class ProductsItemsComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  getPrice() {
    return this.product.discount
      ? this.product.price - this.product.discount
      : this.product.price;
  }

  addedToCart() {
    this.productService.productAdded.emit(this.product);
  }
}
