import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  imageSource = '../../assets/images/generic-barber-logo.jpg';

  constructor() { }

  ngOnInit() {
    this.menuItems = ['Home', 'Admin', 'Map', 'Bookings'];
  }
}
