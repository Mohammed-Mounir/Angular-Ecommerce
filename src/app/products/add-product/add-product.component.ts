import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { ProductCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  Object = Object;

  product: any = {
    data: [{ name: '', description: '' }],
    price: 0,
    discount: 0,
    paymentTypes: [],
    tags: [],
    categoryId: '',
  };

  paymentTypes: PaymentType[] = [];

  productCategory: any = [];

  editMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentTypeService: PaymentTypeService,
    private productCategoryService: ProductCategoryService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editMode =
      this.activatedRoute.snapshot.url[0] &&
      this.activatedRoute.snapshot.url[0].path === 'edit';

    if (this.editMode) {
      const id = this.activatedRoute.snapshot.params.id;
      this.productService.getProductById(id).subscribe(
        (res) => {
          this.product = res;
        },
        () => {},
        () => {}
      );
    }

    this.paymentTypes = this.paymentTypeService.getAllPayments();

    this.productCategoryService.getAllProductCategory().subscribe(
      (res) => {
        this.productCategory = res;
      },
      () => {},
      () => {}
    );
  }

  OnSubmit() {
    console.log(this.product);

    this.productService.addProduct(this.product).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/product']);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  onCheckBoxPressed(index) {
    this.product.paymentTypes.push(this.paymentTypes[index]);
  }

  onTagAdded(tagInput) {
    this.product.tags.push({ name: tagInput.value });
    tagInput.value = '';
  }

  removeTag(tagIndex) {
    for (let index = 0; index < this.product.tags.length; index++) {
      if (tagIndex === index) {
        this.product.tags.splice(index, 1);
      }
    }
  }
}
