import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../classes/post';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatSnackBarComponent } from '../mat-snack-bar/mat-snack-bar.component';

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
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
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
        () => {
          this.successSnackbar('Page saved successfully.');
        },
        (err) => {
          console.warn(err);
          this.errorSnackbar('An error has occurred.');
        }
      );
  }

  successSnackbar(msg: string) {
    msg = msg ? msg : 'Success!';
    this.snackBar.openFromComponent(
      MatSnackBarComponent,
      {
        data: {
          class: 'success',
          message: msg
        },
        duration: 2000
      });
  }

  errorSnackbar(msg: string) {
    msg = msg ? msg : 'Something went wrong!';
    this.snackBar.openFromComponent(
      MatSnackBarComponent,
      {
        data: {
          class: 'error',
          message: msg
        },
        duration: 2000
      });
  }
}
