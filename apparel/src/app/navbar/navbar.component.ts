import { Component, OnInit, OnChanges } from '@angular/core';
import { ApparelService } from '../apparel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  apparelService!: ApparelService;

  constructor() { }

  ngOnInit(): void {
  }

}
