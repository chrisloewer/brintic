import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';

interface SnackBarData {
  class: string;
  message: string;
}

@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './mat-snack-bar.component.html',
  styleUrls: ['./mat-snack-bar.component.scss']
})
export class MatSnackBarComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData,
    private ref: MatSnackBar
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.ref.dismiss();
  }

}
