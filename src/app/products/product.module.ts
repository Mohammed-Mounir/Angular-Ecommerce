import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StringPipe } from '../pipes/string.pipe';
import { AuthGuardService } from '../_services/auth-guard.service';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsItemsComponent } from './products-items/products-items.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsItemsComponent,
    AddProductComponent,
    ProductDetailsComponent,
    StringPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', component: ProductsListComponent },
          {
            path: 'add',
            component: AddProductComponent,
            canActivate: [AuthGuardService],
          },
          { path: 'edit/:id', component: AddProductComponent },
          { path: 'details/:id', component: ProductDetailsComponent },
        ],
      },
    ]),
  ],
  exports: [],
  providers: [],
})
export class ProductModule {}
