import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product;

  relatedProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id;

    this.activatedRoute.params.subscribe(
      (params) => {
        id = params.id;
        this.productService.getProductById(id).subscribe(
          (response) => {
            console.log(response);
            this.product = response;
            this.productService.getAllProducts().subscribe(
              (response) => {
                this.relatedProducts = response['product'].slice(2, 6);
              },
              (err) => {
                console.log(err);
              },
              () => {}
            );
          },
          (err) => {
            console.log(err);
          },
          () => {}
        );
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
