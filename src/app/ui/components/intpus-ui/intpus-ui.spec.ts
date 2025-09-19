import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntpusUi } from './intpus-ui';

describe('IntpusUi', () => {
  let component: IntpusUi;
  let fixture: ComponentFixture<IntpusUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntpusUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntpusUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
