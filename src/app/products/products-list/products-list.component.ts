import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  Object = Object;
  category = {};
  selectedCategory = [];

  list;
  product: Product[];

  numOfPages: number[] = [];

  pageSize = 6;

  currentPage = 0;

  constructor(
    private productService: ProductService,
    private productCategoryService: ProductCategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.product = response['product'];
        this.list = response['product'];
        this.calculateNumOfPages(response['numberOfProducts']);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );

    this.productCategoryService.getAllProductCategory().subscribe(
      (res) => {
        this.category = res;
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  getSlicedArrOfProducts() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    if (this.product) {
      return this.product.slice(start, end);
    }
  }

  onSearch(searchInput) {
    this.currentPage = 0;
    this.product = this.list;

    const searchedProduct = searchInput.value.toLowerCase();

    this.product = this.product.filter((p) =>
      p.data[0].name.toLowerCase().includes(searchedProduct)
    );

    this.calculateNumOfPages(this.product.length);
  }

  calculateNumOfPages(length) {
    this.numOfPages = [];
    for (let index = 0; index < length / this.pageSize; index++) {
      this.numOfPages.push(index + 1);
    }
  }

  sort(selectOption) {
    this.currentPage = 0;
    this.product = this.list.slice();

    if (selectOption.value === '1') {
      return this.product;
    }

    if (selectOption.value === '2') {
      this.product.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (selectOption.value === '3') {
      this.product.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (selectOption.value === '4') {
      this.product.sort((a, b) => {
        let nameA = a.data[0].name.toLowerCase();
        let nameB = b.data[0].name.toLowerCase();

        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });
    }
  }

  selectCategory(category) {
    this.currentPage = 0;
    this.product = this.list.slice();

    for (const i of this.product) {
      if (category === i.categoryId) {
        this.selectedCategory.push(i);
      }
    }

    this.product = this.selectedCategory;
    this.selectedCategory = [];

    this.calculateNumOfPages(this.product.length);
  }
}
