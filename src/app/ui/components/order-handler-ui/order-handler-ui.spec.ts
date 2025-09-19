import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHandlerUi } from './order-handler-ui';

describe('OrderHandlerUi', () => {
  let component: OrderHandlerUi;
  let fixture: ComponentFixture<OrderHandlerUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHandlerUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHandlerUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
