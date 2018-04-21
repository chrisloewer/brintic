import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  editActive: boolean;
  previewActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleEditMode(): void {
    this.editActive = !this.editActive;
  }
  togglePreviewMode(): void {
    this.previewActive = !this.previewActive;

    // Allow time for animation to finish.  Then trigger window resize to update homepage size variables
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
