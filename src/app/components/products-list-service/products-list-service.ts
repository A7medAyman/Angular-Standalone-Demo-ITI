import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products-service';
@Component({
  selector: 'app-products-list-service',
  imports: [],
  templateUrl: './products-list-service.html',
  styleUrl: './products-list-service.css'
})
export class ProductsListService {

   products: IProduct[] = [];

  constructor(private ProductsService: ProductsService) {}

  ngOnInit() {
    this.products = this.ProductsService.getProductsByCatID(0); 
  }

}
