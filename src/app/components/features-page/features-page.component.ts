import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.scss'],
  providers: [PostService]
})
export class FeaturesPageComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
    // if Post not passed in by edit component, load based on url
    if (!this.post) {
      this.getPost();
    }
  }

  getPost(): void {
    this.postService.getPost('features')
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

}
