import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss']
})
export class ImageInputComponent implements OnInit {

  @Input() imagePath: string;
  @Output() imagePathEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  showGallery(): void {
    const dialogRef = this.dialog.open(GalleryModalComponent, {
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe( (image) => {
      if (image) {
        this.imagePathEmitter.emit(image);
      }
    });
  }
}
