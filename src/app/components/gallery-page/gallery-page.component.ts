import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Image } from '../../classes/image';
import { MatSnackBar } from '@angular/material';
import { MatSnackBarComponent } from '../mat-snack-bar/mat-snack-bar.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  providers: [PostService]
})
export class GalleryPageComponent implements OnInit {

  errMsg: string;
  fileDataUri: string;
  fileLabel: string;
  images: Image[];
  loading = true;
  acceptedMimeTypes = [
    'image/gif',
    'image/jpeg',
    'image/png'
  ];
  loggedIn: boolean;

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadImages();
    this.loggedIn = AuthService.isAuthenticated();
  }

  loadImages(): void {
    this.postService.getGallery()
      .subscribe(
        (gallery) => {
          this.images = gallery;
          this.loading = false;
        },
        (err) => {
          console.warn(err);
          this.loading = false;
        }
      );
  }

  deleteImage(imageName: string): void {
    this.postService.deleteImage(imageName)
      .subscribe(
        () => {
          this.loadImages();
          this.successSnackbar('Image deleted successfully.');
        },
        () => {
          this.errMsg = 'An error occurred while deleting this image.  Please try again.';
          this.errorSnackbar('Failed to delete image.');
        }
      );
  }

  fileSelected(fileEvent: Event): void {
    try {
      const file = fileEvent.target['files'][0];
      this.fileLabel = file.name;
      this.errMsg = '';
      this.fileDataUri = '';

      if (file && this.validateFile(file)) {

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.fileDataUri = reader.result;
        };
      } else {
        this.errMsg = 'File must be jpg, png, or gif and cannot be exceed 500 KB in size';
      }
    } catch (e) {}
  }

  uploadImage(): void {
    this.postService.uploadImage(this.fileDataUri)
      .subscribe(
        () => {
          this.loadImages();
          this.fileLabel = '';
          this.errMsg = '';
          this.fileDataUri = '';
          this.successSnackbar('Image upload complete.');
        },
        () => {
          this.errMsg = 'An error occurred while adding this image.  Please try again.';
          this.errorSnackbar('Image upload failed.');
        }
      );
  }

  validateFile(file): boolean {
    return this.acceptedMimeTypes.includes(file.type) && file.size < 500000;
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
