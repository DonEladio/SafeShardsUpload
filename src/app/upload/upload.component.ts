import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  template: `
  <div class="container">
<div class="upload-text">Please upload your files here</div>
<button class="btn-upload" mat-raised-button (click)="openUploadDialog()">Upload</button>
</div>
  `,
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(public dialog: MatDialog, public uploadService: UploadService) {}

  public openUploadDialog() {
    const dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }
}
