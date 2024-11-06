import { Component } from '@angular/core';
import { SideBarMenuItemComponent } from '../side-bar-menu-item/side-bar-menu-item.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  username="Luis's Test";
  useremail="lcruz@agilesolutions.com"
}
