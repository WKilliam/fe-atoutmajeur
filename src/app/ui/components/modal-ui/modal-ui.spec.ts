import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUi } from './modal-ui';

describe('ModalUi', () => {
  let component: ModalUi;
  let fixture: ComponentFixture<ModalUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
