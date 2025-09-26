import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsApi } from './products-api';

describe('ProductsApi', () => {
  let component: ProductsApi;
  let fixture: ComponentFixture<ProductsApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
