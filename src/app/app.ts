import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from "./components/products/products";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ProductDetails } from "./components/product-details/product-details";
import { Clock } from "./components/clock/clock";
import { ParentFilter } from "./components/parent-filter/parent-filter";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Products, Header, Footer, ProductDetails, Clock, ParentFilter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Day2');

  clockFlag = true;

  toggleClock() {
    this.clockFlag = !this.clockFlag;
  }
}
