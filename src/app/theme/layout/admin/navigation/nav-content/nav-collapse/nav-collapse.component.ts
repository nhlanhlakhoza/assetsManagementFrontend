import { trigger, transition, style, animate } from '@angular/animations';
import { Component, input } from '@angular/core';
import { NavigationItem } from '../../navigation';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrl: './nav-collapse.component.scss',
    animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', display: 'block' }),
        animate('250ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [animate('250ms ease-in', style({ transform: 'translateY(-100%)' }))])
    ])
  ]
})
export class NavCollapseComponent {
 // public props
  item = input.required<NavigationItem>();

  // public method
  navCollapse(e: MouseEvent) {
    let parent = e.target as HTMLElement;

    if (parent?.tagName === 'SPAN') {
      parent = parent.parentElement!;
    }
    parent = (parent as HTMLElement).parentElement as HTMLElement;
    const sections = document.querySelectorAll('.pcoded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('pcoded-trigger');
      }
    }
    let first_parent = parent.parentElement;
    let pre_parent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
    if (first_parent?.classList.contains('pcoded-hasmenu')) {
      do {
        first_parent.classList.add('pcoded-trigger');
        first_parent = ((first_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (first_parent.classList.contains('pcoded-hasmenu'));
    } else if (pre_parent.classList.contains('pcoded-submenu')) {
      do {
        pre_parent?.parentElement?.classList.add('pcoded-trigger');
        pre_parent = (((pre_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (pre_parent.classList.contains('pcoded-submenu'));
    }
    parent.classList.toggle('pcoded-trigger');
  }
}
