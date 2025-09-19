import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsRoute } from './product-details-route';

describe('ProductDetailsRoute', () => {
  let component: ProductDetailsRoute;
  let fixture: ComponentFixture<ProductDetailsRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
