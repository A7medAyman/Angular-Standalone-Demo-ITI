import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListChild } from '../product-list-child/product-list-child';



@Component({
  selector: 'app-parent-filter',
  imports: [FormsModule,CommonModule,ProductListChild],
  templateUrl: './parent-filter.html',
  styleUrl: './parent-filter.css'
})
export class ParentFilter {
searchText: string = "";
}
