import { NgModule } from '@angular/core';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarComponent } from '../components/mat-snack-bar/mat-snack-bar.component';

@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    MatSnackBarModule,
    MatDialogModule
  ],
  declarations: [
    MatSnackBarComponent
  ],
  entryComponents: [
    MatSnackBarComponent
  ]
})
export class MaterialModule {}
