import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOrderHandlerUi } from './header-order-handler-ui';

describe('HeaderOrderHandlerUi', () => {
  let component: HeaderOrderHandlerUi;
  let fixture: ComponentFixture<HeaderOrderHandlerUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderOrderHandlerUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOrderHandlerUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
