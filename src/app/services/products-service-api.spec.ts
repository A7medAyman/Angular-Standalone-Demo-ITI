import { TestBed } from '@angular/core/testing';

import { ProductsServiceApi } from './products-service-api';

describe('ProductsServiceApi', () => {
  let service: ProductsServiceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
