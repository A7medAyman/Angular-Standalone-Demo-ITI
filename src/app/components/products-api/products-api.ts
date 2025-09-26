import { Component,OnInit } from '@angular/core';
import { IproductsApi } from '../../models/iproducts-api';
import { ProductsServiceApi } from '../../services/products-service-api';
import { CommonModule } from '@angular/common';
import { API_ENDPOINTS } from '../../constants/api_urls';

@Component({
  selector: 'app-products-api',
   standalone: true, 
  imports: [CommonModule],
  templateUrl: './products-api.html',
  styleUrls: ['./products-api.css']
})
export class ProductsApi implements OnInit {
productsapi : IproductsApi[] =[]

 constructor(private _productsSeviceApi: ProductsServiceApi) {}
 ngOnInit(): void {
  this._productsSeviceApi.getAllProducts().subscribe((response) => {this.productsapi = response;});
  
 }

}
