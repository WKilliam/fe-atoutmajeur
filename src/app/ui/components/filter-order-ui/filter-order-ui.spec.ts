import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOrderUi } from './filter-order-ui';

describe('FilterOrderUi', () => {
  let component: FilterOrderUi;
  let fixture: ComponentFixture<FilterOrderUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterOrderUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterOrderUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
