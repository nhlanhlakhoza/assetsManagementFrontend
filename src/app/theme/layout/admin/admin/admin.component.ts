import { Component, HostListener, inject } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'] // ✅ plural
})
export class AdminComponent {
  // Inject LocationStrategy properly
  private locationStrategy = inject(LocationStrategy);

  // public props
  navCollapsed!: boolean;
  navCollapsedMob: boolean;
  windowWidth: number;

  // constructor
  constructor() {
    this.windowWidth = window.innerWidth;
    this.navCollapsedMob = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth < 992) {
      document.querySelector('.pcoded-navbar')?.classList.add('menupos-static');
      const nav = document.querySelector('app-navigation.pcoded-navbar');
      if (nav?.classList.contains('navbar-collapsed')) {
        nav.classList.remove('navbar-collapsed');
      }
    }
  }

  // public method
  navMobClick() {
    const nav = document.querySelector('app-navigation.pcoded-navbar');
    if (this.windowWidth < 992) {
      if (this.navCollapsedMob && nav && !nav.classList.contains('mob-open')) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu() {
    const nav = document.querySelector('app-navigation.pcoded-navbar');
    if (nav?.classList.contains('mob-open')) {
      nav.classList.remove('mob-open');
    }
  }
}
