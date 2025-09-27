import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationUi } from './pagination-ui';

describe('PaginationUi', () => {
  let component: PaginationUi;
  let fixture: ComponentFixture<PaginationUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
