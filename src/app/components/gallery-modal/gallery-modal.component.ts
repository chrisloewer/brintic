import { Component, OnInit } from '@angular/core';
import { Image } from '../../classes/image';
import { PostService } from '../../services/post.service';

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
    private postService: PostService
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
}
