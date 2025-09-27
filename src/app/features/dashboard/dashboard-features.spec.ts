import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFeatures } from './dashboard-features';

describe('DashboardFeatures', () => {
  let component: DashboardFeatures;
  let fixture: ComponentFixture<DashboardFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
