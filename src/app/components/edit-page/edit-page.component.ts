import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../classes/post';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
  providers: [PostService]
})
export class EditPageComponent implements OnInit {

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
    // this.editActive = true;
    this.getPost();
  }

  toggleEditMode(): void {
    this.editActive = !this.editActive;
  }
  togglePreviewMode(): void {
    this.previewActive = !this.previewActive;
  }

  getPost(): void {
    this.postService.getPost('generic')
      .subscribe(
        (p) => {
          this.post = p;
          this.loaded = true;
        }
      );
  }
}
