import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['./generic-page.component.scss'],
  providers: [PostService]
})
export class GenericPageComponent implements OnInit {

  @Input() post: Post;
  pageId: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // if Post not passed in by edit component, load based on url
    if (!this.post) {
      this.route.params.subscribe(params => {
        this.pageId = params['id'];
        this.getPost();
      });
    }
  }

  getPost(): void {
    this.postService.getPost(this.pageId)
      .subscribe(
        (p) => this.post = p,
        (err) => console.warn(err)
      );
  }

  getContent(contentBlockId): String {
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
