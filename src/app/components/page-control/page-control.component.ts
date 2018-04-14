import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './page-control.component.html',
  styleUrls: ['./page-control.component.scss']
})
export class PageControlComponent implements OnInit {

  menuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
