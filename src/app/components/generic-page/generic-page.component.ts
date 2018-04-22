import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['./generic-page.component.scss']
})
export class GenericPageComponent implements OnInit {

  @Input() bodyContent: string;

  constructor() { }

  ngOnInit() {
    if (!this.bodyContent) {
      this.bodyContent = 'Generic Content will go here';
    }
  }

}
