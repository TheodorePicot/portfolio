import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems = [
    {
      itemName: "Home",
      itemLink: "home"
    },
    {
      itemName: "My Projects",
      itemLink: "projects"
    },
    {
      itemName: "About Me",
      itemLink: "about"
    },
    {
      itemName: "Contact",
      itemLink: "contact"
    }
  ]
}
