import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';
import {ObjectDetails} from './models/object-details.model';
@Component({
  selector: 'app-upload',
  template: `
  <div class="container">
<div class="upload-text">Please upload your files here</div>
<button class="btn-upload" mat-raised-button (click)="openUploadDialog()">Upload</button>
<ul class="heroes">
  <li *ngFor="let hero of objects"
    [class.selected]="hero === selectedHero"
    >
    <div class="bg2"></div>
    <div class="file-container">

       <img class="file-container__icon" src="../../assets/file.png" />

      <div class="file-container__name">{{hero.name}}</div>
      <div class="file-container__download" >
        <img src="../../assets/ic-download.png" class="download-img" (click)="onSelect(hero)" />
      </div>
    </div>
  </li>
</ul>
</div>



  `,
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  objects = [{id: '1', name: 'b', link: 'cc'}, {id: '1', name: 'a', link: 'bbb'}];
  selectedHero: ObjectDetails;

  constructor(public dialog: MatDialog, public uploadService: UploadService) {}

  public openUploadDialog() {
    const dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }

  onSelect(objectDetails: ObjectDetails): void {
    console.log(objectDetails);
  }
}
