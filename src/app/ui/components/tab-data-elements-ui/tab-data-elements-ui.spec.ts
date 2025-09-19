import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDataElementsUi } from './tab-data-elements-ui';

describe('TabDataElementsUi', () => {
  let component: TabDataElementsUi;
  let fixture: ComponentFixture<TabDataElementsUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabDataElementsUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDataElementsUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
