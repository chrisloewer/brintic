import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../classes/post';
import { ActivatedRoute } from '@angular/router';

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
  pageId: string;
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {
    this.loaded = false;
  }

  ngOnInit() {
    // this.editActive = true;
    this.route.params.subscribe(params => {
      this.pageId = params['id'];
      if (this.pageId !== undefined) {
        this.getPost();
      }
    });
  }

  toggleEditMode(): void {
    this.editActive = !this.editActive;
  }
  togglePreviewMode(): void {
    this.previewActive = !this.previewActive;
  }

  getPost(): void {
    this.postService.getPost(this.pageId)
      .subscribe(
        (p) => {
          this.post = p;
          this.loaded = true;
        }
      );
  }

  setPost(): void {
    this.postService.setPost(this.post)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.warn(err)
      );
  }
}
