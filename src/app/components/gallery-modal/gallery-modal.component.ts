import { Component, OnInit } from '@angular/core';
import { Image } from '../../classes/image';
import { PostService } from '../../services/post.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss'],
  providers: [PostService]
})
export class GalleryModalComponent implements OnInit {

  images: Image[];
  loading = true;

  constructor(
    private postService: PostService,
    private dialogRef: MatDialogRef<GalleryModalComponent>
  ) { }

  ngOnInit() {
    this.loadImages();
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

  returnImage(src: string): void {
    this.dialogRef.close(src);
  }
}
