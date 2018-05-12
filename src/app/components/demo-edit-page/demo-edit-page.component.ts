import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-demo-edit-page',
  templateUrl: './demo-edit-page.component.html',
  styleUrls: ['./demo-edit-page.component.scss'],
  providers: [PostService]
})

// Demo Edit Component is a duplicate of the regular edit page, but without write capabilities
export class DemoEditPageComponent implements OnInit {

  editActive: boolean;
  previewActive: boolean;
  loaded: boolean;
  post: Post;

  constructor(
    private postService: PostService
  ) {
    this.loaded = false;
  }

  ngOnInit() {
    if (!this.post) {
      this.getPost();
    }
  }

  toggleEditMode(): void {
    this.editActive = !this.editActive;
  }
  togglePreviewMode(): void {
    this.previewActive = !this.previewActive;
  }

  getPost(): void {
    this.postService.getPost('demo')
      .subscribe(
        (p) => {
          this.post = p;
          this.loaded = true;
        }
      );
  }

  // Used to bind Emitter results to contentBlock.content
  setContent(contentBlock, event) {
    contentBlock.content = event;
  }

}
