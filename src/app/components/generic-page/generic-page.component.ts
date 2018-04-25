import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-generic-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['./generic-page.component.scss'],
  providers: [PostService]
})
export class GenericPageComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() { }

  getContent(contentBlockId): String {
    try {
      return this.post.contentBlocks.filter(function (block) {
        return block.id === contentBlockId;
      })[0].content;
    } catch (e) { }
    return '';
  }

}
