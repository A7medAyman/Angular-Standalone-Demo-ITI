import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  products! : IProduct[];
  getProductByName(search: string): IProduct[] {
        if (search == "") {
            return this.products!
          }
         else {
            return this.products.filter(p => p.name.includes(search))
        }
    }
}
