import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRightComponent } from './nav-bar-right.component';

describe('NavBarRightComponent', () => {
  let component: NavBarRightComponent;
  let fixture: ComponentFixture<NavBarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
