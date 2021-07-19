import { Component, OnInit } from '@angular/core';
import { faBars,faHome,faClock,faUsers,faCog,faDoorOpen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faBars = faBars;
  faHome = faHome;
  faClock = faClock;
  faUsers = faUsers;
  faCog = faCog;
  faDoorOpen = faDoorOpen;
  constructor() { }

  ngOnInit(): void {
  }

}
