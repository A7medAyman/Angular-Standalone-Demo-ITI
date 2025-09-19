import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListService } from './products-list-service';

describe('ProductsListService', () => {
  let component: ProductsListService;
  let fixture: ComponentFixture<ProductsListService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsListService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
