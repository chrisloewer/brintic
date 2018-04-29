import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Image } from '../../classes/image';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  providers: [PostService]
})
export class GalleryPageComponent implements OnInit {

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
