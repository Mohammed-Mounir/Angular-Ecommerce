import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomAppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { TopHeaderComponent } from './layout/top-header/top-header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './info/contact-us/contact-us.component';
import { AboutUsComponent } from './info/about-us/about-us.component';
import { HomeComponent } from './home/home.component';

import { ProductService } from './_services/product.services';
import { ProductCategoryService } from './_services/product-category.service';
import { PaymentTypeService } from './_services/payment-type.service';

import { SharedModule } from './shared/shared.module';
import { MyInterceptorService } from './_services/my-interceptor.service';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    TopHeaderComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    // FontAwesomeModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ProductModule,
    CustomAppRoutingModule,
    HttpClientModule,
    SharedModule,
    // ProductModule,
  ],
  providers: [
    ProductService,
    PaymentTypeService,
    ProductCategoryService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
