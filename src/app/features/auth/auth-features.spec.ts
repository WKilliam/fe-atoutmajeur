import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFeatures } from './auth-features';

describe('AuthFeatures', () => {
  let component: AuthFeatures;
  let fixture: ComponentFixture<AuthFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
