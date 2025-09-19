import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';


@Component({
  selector: 'app-product-list-child',
  imports: [],
  templateUrl: './product-list-child.html',
  styleUrl: './product-list-child.css'
})
export class ProductListChild {
 @Input() search: string = "";

  products: IProduct[] = [
    { id: 1, name: 'Laptop', price: 2000, quantity: 5, img: 'assets/laptop.jpg', categoryId: 1 },
    { id: 2, name: 'Phone', price: 1000, quantity: 10, img: 'assets/phone.jpg', categoryId: 1 },
    { id: 3, name: 'Tablet', price: 800, quantity: 7, img: 'assets/tablet.jpg', categoryId: 1 },
    { id: 4, name: 'Camera', price: 1200, quantity: 3, img: 'assets/camera.jpg', categoryId: 1 }
  ];

  get filteredProducts(): IProduct[] {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
