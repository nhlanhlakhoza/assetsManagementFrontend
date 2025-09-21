import { Component, inject, input, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationItem } from '../../navigation';

export interface NavigationType {
  // define properties of NavigationType here
  title: string;
  path: string;
  icon?: string;
  children?: NavigationType[];
}

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss'] 
})
export class NavGroupComponent implements OnInit {
  private location = inject(Location);

  // public props
 item = input.required<NavigationItem>();

  // life cycle event
  ngOnInit() {
    // at reload time active and trigger link
    let current_url = this.location.path();

    // @ts-ignore
    if (this.location['_baseHref']) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      current_url = this.location['_baseHref'] + this.location.path();
    }

    const link = `a.nav-link[href='${current_url}']`;
    const ele = document.querySelector(link);

    if (ele) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const pre_parent = up_parent?.parentElement;
      const last_parent = up_parent?.parentElement?.parentElement?.parentElement?.parentElement;

      if (parent?.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger', 'active');
      } else if (up_parent?.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger', 'active');
      } else if (pre_parent?.classList.contains('pcoded-hasmenu')) {
        pre_parent.classList.add('pcoded-trigger', 'active');
      }

      if (last_parent?.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger', 'active');
        if (pre_parent?.classList.contains('pcoded-hasmenu')) {
          pre_parent.classList.add('pcoded-trigger');
        }
      }
    }
  }
}
