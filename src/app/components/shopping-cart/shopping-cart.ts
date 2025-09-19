import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products-service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css'
})
export class ShoppingCart {
  cart: IProduct[] = [];
product!: IProduct;

  constructor(private productService: ProductsService, private router : Router) {}

  ngOnInit() {
    this.cart.push(this.productService.getProductByID(1)!);
    this.cart.push(this.productService.getProductByID(2)!);
    this.cart.push(this.productService.getProductByID(3)!);
  }

  goToDetails(id: number) {
    this.router.navigate(['/products', id]).then(() => {
      console.log(`Navigation to product ${id}`);
    });
  }



  @Input() search: string = "";
get filteredProducts(): IProduct[] {
  return this.cart.filter(p =>
    p.name.toLowerCase().includes(this.search.toLowerCase())
  );
}

}
