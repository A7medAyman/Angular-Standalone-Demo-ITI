import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'   // 👈 service is available globally
})
export class ProductsService {

  private products: IProduct[] = [
    { id: 1, name: "Tablet", quantity: 8, price: 2000, img:'assets/tablet.jpg', categoryId: 1 },
    { id: 2, name: "Camera", quantity: 7, price: 1200, img:'assets/camera.jpg', categoryId: 1 },
    { id: 3, name: "T-Shirt", quantity: 9, price: 35, img:'assets/tshirt.jpg', categoryId: 2 },
    { id: 4, name: "Sunglasses", quantity: 5, price: 600, img:'assets/sunglasses.jpg', categoryId: 2 },
    { id: 5, name: "Chair", quantity: 12, price: 200, img:'assets/chair.jpg', categoryId: 3 },
    { id: 6, name: "Air Fryer", quantity: 4, price: 900, img:'assets/airfryer.jpg', categoryId: 3 }
  ];

 
  getProductsByCatID(catID: number): IProduct[] {
    if (catID === 0) return this.products;
    return this.products.filter(p => p.categoryId === catID);
  }

  
  getProductByID(prodID: number): IProduct | undefined {
    return this.products.find(p => p.id === prodID);
  }
}
