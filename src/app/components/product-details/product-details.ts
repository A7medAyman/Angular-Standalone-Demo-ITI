import { Component,EventEmitter,Input,Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { Products } from '../products/products';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})




export class ProductDetails {
   @Input() product!: IProduct; 
  @Output() close = new EventEmitter<void>(); 
  closeDetails() {
  this.close.emit();  
  console.log(this.product);
}
}
