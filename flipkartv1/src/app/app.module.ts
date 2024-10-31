import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { BannerComponent } from './banner/banner.component';

import { LoginPageComponent } from './login-page/login-page.component';
import {MatMenuModule} from '@angular/material/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CardViewComponent } from './card-view/card-view.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeCopyComponent } from './home-copy/home-copy.component';
import {MatIconModule} from '@angular/material/icon';
import { BeautyProductsComponent } from './beauty-products/beauty-products.component';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button'; 
import { ImageModule } from 'primeng/image'; 
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { SecondNavComponent } from './second-nav/second-nav.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    BannerComponent,
    LoginPageComponent,
    CardViewComponent,
    HomeCopyComponent,
    BeautyProductsComponent,
    OrdersComponent,
    ProfileComponent,
    SecondNavComponent,
    OtpPageComponent,
    TestPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    CarouselModule,
    ButtonModule,
    ImageModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
