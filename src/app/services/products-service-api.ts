import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../constants/api_urls';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceApi {
  constructor(private httpClient: HttpClient) {}

   getAllProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(API_ENDPOINTS.PRODUCTS.ALL);
  }


   getProductById(id: number): Observable<any> {
    return this.httpClient.get<any>(API_ENDPOINTS.PRODUCTS.BY_ID(id));
  }
}
