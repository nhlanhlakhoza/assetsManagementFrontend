import { Component, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { NavigationItem, NavigationItems } from '../navigation';
import { Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
})
export class NavContentComponent implements OnInit {
  private location = inject(Location);
  private locationStrategy = inject(LocationStrategy);

  // public props
  navigation: NavigationItem[] = [];
  contentWidth: number = 0;
  wrapperWidth!: number;
  scrollWidth: number = 0;
  windowWidth: number = window.innerWidth;

  @Output() NavMobCollapse = new EventEmitter<void>();

  constructor() {
    this.navigation = NavigationItems;
  }

  ngOnInit() {
    if (this.windowWidth < 992) {
      setTimeout(() => {
        document.querySelector('.pcoded-navbar')?.classList.add('menupos-static');
        const navGradient = document.querySelector('#nav-ps-gradient-able') as HTMLElement;
        if (navGradient) navGradient.style.height = '100%';
      }, 500);
    }
  }

  // TrackBy function for ngFor
  trackByFn(index: number, item: NavigationItem) {
    return item.id || index;
  }

  fireLeave() {
    const sections = document.querySelectorAll('.pcoded-hasmenu');
    sections.forEach((section) => {
      section.classList.remove('active', 'pcoded-trigger');
    });

    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) current_url = baseHref + this.location.path();

    const ele = document.querySelector(`a.nav-link[href='${current_url}']`);
    if (ele) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('pcoded-hasmenu')) parent.classList.add('active');
      else if (up_parent?.classList.contains('pcoded-hasmenu')) up_parent.classList.add('active');
      else if (last_parent?.classList.contains('pcoded-hasmenu')) last_parent.classList.add('active');
    }
  }

  navMob() {
    if (
      this.windowWidth < 992 &&
      document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')
    ) {
      this.NavMobCollapse.emit();
    }
  }

  fireOutClick() {
    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) current_url = baseHref + this.location.path();

    const ele = document.querySelector(`a.nav-link[href='${current_url}']`);
    if (ele) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger', 'active');
      } else if (up_parent?.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger', 'active');
      } else if (last_parent?.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger', 'active');
      }
    }
  }
}
