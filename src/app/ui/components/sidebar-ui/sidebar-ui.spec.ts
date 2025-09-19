import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUi } from './sidebar-ui';

describe('SidebarUi', () => {
  let component: SidebarUi;
  let fixture: ComponentFixture<SidebarUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
