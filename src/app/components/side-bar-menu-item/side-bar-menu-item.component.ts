import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-side-bar-menu-item',
  templateUrl: './side-bar-menu-item.component.html',
  styleUrls: ['./side-bar-menu-item.component.css']
})
export class SideBarMenuItemComponent {

  @Input() public nameMenu: string = "";

  @Input() public descriptionMenu: string = "";
  
  @Input() public iconNameMenu: string = "";
  @Input() public routerLink: string = "";


  ngOnInit(): void { console.log("iconNameMenu:",this.iconNameMenu) }


}
