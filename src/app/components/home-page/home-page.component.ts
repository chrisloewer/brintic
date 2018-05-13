import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Post } from '../../classes/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [PostService]
})
export class HomePageComponent implements OnInit {

  @Input() post: Post;
  scrollY = 0;


  constructor(
    private elem: ElementRef,
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // if Post not passed in by edit component, load based on url
    if (!this.post) {
      this.getPost();
    }
  }

  getPost(): void {
    this.postService.getPost('home')
      .subscribe(
        (p) => this.post = p,
        (err) => console.warn(err)
      );
  }

  getContent(contentBlockId): string {
    try {
      return this.post.contentBlocks.filter(function (block) {
        return block.id === contentBlockId;
      })[0].content;
    } catch (e) { }
    return '';
  }

  // Only return url if path is specified
  // This stops invalid network requests while the path is being loaded from api call
  getUrl(path: string): string {
    if (path) {
      return 'url(' + path + ')';
    }
    return null;
  }


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
