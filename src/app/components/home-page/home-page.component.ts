import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  scrollY = 0;


  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit() { }

  scrollHandler(event): void {
    // Get how many px the main container has scrolled
    // Add height of the container to count from the bottom of the screen, minus buffer
    this.scrollY = event.target.scrollTop + event.target.offsetHeight - 80;
  }

  isVisible(elementId): boolean {
    const domElem = this.elem.nativeElement.querySelector(elementId);

    // For nested elements, add parent distance to get true distance to top
    const offset = domElem.offsetTop + domElem.parentElement.offsetTop;
    return (this.scrollY >= offset);
  }
}
