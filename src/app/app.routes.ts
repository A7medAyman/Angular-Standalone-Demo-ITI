import { Routes } from '@angular/router';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { Products } from './components/products/products';
import { ProductDetailsRoute } from './components/product-details-route/product-details-route';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { ProductsApi } from './components/products-api/products-api';
import { LoginApi } from './components/login-api/login-api';
import { authGuardGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Products },
    { path: 'productsapi', component: ProductsApi },
    {path: 'register', component:Register,},
    {path: 'login', component:Login},
    { path: 'aboutus', component: AboutUs},
     { path: 'contact', component: ContactUs},
   {path:'products', component: ShoppingCart},
    { path: 'products/:id', component: ProductDetailsRoute, canActivate:[authGuardGuard]},
    {path: 'loginapi', component:LoginApi,},
     { path: '**', component: NotFound }  
];
