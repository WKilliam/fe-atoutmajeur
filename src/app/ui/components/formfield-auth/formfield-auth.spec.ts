import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldAuth } from './formfield-auth';

describe('FormfieldAuth', () => {
  let component: FormfieldAuth;
  let fixture: ComponentFixture<FormfieldAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfieldAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfieldAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
