import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
   @Output() NavCollapse: EventEmitter<void> = new EventEmitter<void>();
   @Output()  NavCollapsedMob:EventEmitter<void> = new EventEmitter<void>();
 // public props
  menuClass: boolean;
  collapseStyle: string;
  windowWidth: number;

  // constructor
  constructor() {
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
  }

  // public method
  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = this.menuClass ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.NavCollapse.emit();
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 992) {
      this.NavCollapsedMob.emit();
    }
  }
}
function output() {
  throw new Error('Function not implemented.');
}

