import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDataUi } from './tabs-data-ui';

describe('TabsDataUi', () => {
  let component: TabsDataUi;
  let fixture: ComponentFixture<TabsDataUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsDataUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsDataUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
