import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUi } from './select-ui';

describe('SelectUi', () => {
  let component: SelectUi;
  let fixture: ComponentFixture<SelectUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
