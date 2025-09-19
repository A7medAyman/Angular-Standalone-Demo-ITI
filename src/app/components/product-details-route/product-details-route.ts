import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-product-details-route',
  imports: [],
  templateUrl: './product-details-route.html',
  styleUrl: './product-details-route.css'
})
export class ProductDetailsRoute {

  product?: IProduct;

  constructor(private route: ActivatedRoute, private ProductsService: ProductsService) {}

  ngOnInit() {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.ProductsService.getProductByID(id);
  }
}
