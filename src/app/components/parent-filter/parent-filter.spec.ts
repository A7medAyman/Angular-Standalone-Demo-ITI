import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFilter } from './parent-filter';

describe('ParentFilter', () => {
  let component: ParentFilter;
  let fixture: ComponentFixture<ParentFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
