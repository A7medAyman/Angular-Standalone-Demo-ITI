import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { Cardshadow } from '../../directives/cardshadow';
import { CommonModule } from '@angular/common'; 
import { CreditCardPipe } from '../../pipes/credit-card-pipe';
import { ProductDetails } from '../product-details/product-details';
@Component({
  selector: 'app-products',
  imports: [FormsModule,Cardshadow,CommonModule, CreditCardPipe,ProductDetails],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  

  productList: IProduct[] = 
  [
    {
      id: 1,
      name: "Tablet",
      quantity: 8,
      price: 2000,
      img:'https://m.media-amazon.com/images/I/718N62+jU7S._AC_SL1500_.jpg',  
      categoryId: 1
    },
    {
      id: 2,
      name: "Camera",
      quantity: 7,
      price: 1200,
      img:'https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg',
      categoryId: 1
    },
    {
      id: 3,
      name: "T-Shirt",
      quantity: 9,
      price: 35,
      img:'https://static.vecteezy.com/system/resources/thumbnails/025/289/353/small_2x/commercial-white-t-shirt-mockup-photo.jpg',
      categoryId: 2
    },
    {
      id: 4,
      name: "Sunglasses",
      quantity: 5,
      price: 600,
      img: 'data:image/jpeg;base64,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',
      categoryId: 2
    },
    {
      id: 5,
      name: "Chair",
      quantity: 12,
      price: 200,
      img:'https://m.media-amazon.com/images/I/518AxMzhOUL.jpg',
      categoryId: 3
    },
    {
      id: 6,
      name: "Air Fryer",
      quantity: 4,
      price: 900,
      img:'https://i5.walmartimages.com/seo/Ninja-Air-Fryer-XL-5-5-Qt-Black-AF150WM_d0da1bdc-ff7d-4735-b920-eab87af86578.d0902b47304e9faf8d6a3363f6b54565.png',
      categoryId: 1
    }
  ]

  buyProduct(prod: IProduct)
     {
     if (prod.quantity >= 2) 
          prod.quantity -= 2;
        else
        prod.quantity--;
     }

  showDetails(prod: IProduct)
     { alert(`Product: ${prod.name}\nPrice: ${prod.price}\nQuantity: ${prod.quantity}`); }

  Quantity(qty: number): string {
    switch (qty) {
      case 0: return "Out of stock";
      case 1: return "Last one item!";
      case 2: return "Last two items!";
      default: return "In stock";
    }
  }
  search: string = "";
   get filteredProducts(): IProduct[] 
   {
    return this.productList.filter(
      p =>p.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }
  currentDate: Date = new Date();


selectedProduct?: IProduct


viewDetails(product: IProduct) {
  this.selectedProduct = product;
}


onCloseDetails() {
  this.selectedProduct = undefined;
}


}
