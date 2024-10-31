import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeCopyComponent } from './home-copy/home-copy.component';
import { OtpPageComponent } from './otp-page/otp-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home', component: HomeCopyComponent},
  {path:'login', component: LoginPageComponent},
  {path:'order',component:OrdersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'optpage',component:OtpPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
