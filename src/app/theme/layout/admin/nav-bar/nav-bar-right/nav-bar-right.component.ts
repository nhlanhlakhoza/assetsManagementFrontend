import { Component } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-bar-right',
  templateUrl: './nav-bar-right.component.html',
  styleUrls: ['./nav-bar-right.component.scss'], 
  providers: [NgbDropdownConfig],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class NavBarRightComponent {
  // public props
  visibleUserList = false;
  chatMessage = false;
  friendId!: number;

  // public method
  onChatToggle(friendID: any) {
    this.friendId = friendID;
    this.chatMessage = !this.chatMessage;
  }
}
