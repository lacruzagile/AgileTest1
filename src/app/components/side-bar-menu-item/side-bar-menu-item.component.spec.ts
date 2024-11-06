import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMenuItemComponent } from './side-bar-menu-item.component';

describe('SideBarMenuItemComponent', () => {
  let component: SideBarMenuItemComponent;
  let fixture: ComponentFixture<SideBarMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarMenuItemComponent]
    });
    fixture = TestBed.createComponent(SideBarMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
