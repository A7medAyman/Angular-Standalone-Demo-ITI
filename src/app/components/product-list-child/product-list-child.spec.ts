import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListChild } from './product-list-child';

describe('ProductListChild', () => {
  let component: ProductListChild;
  let fixture: ComponentFixture<ProductListChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
