import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';
import {ObjectDetails} from './models/object-details.model';
@Component({
  selector: 'app-upload',
  template: `
  <div class="container">
<div class="upload-text">Hello Einat Dor!</div>
<button class="btn-upload" mat-raised-button (click)="openUploadDialog()">Upload Secrets</button>
<ul class="heroes">
  <li *ngFor="let hero of this.uploadService.objects"
    [class.selected]="hero === selectedHero"
    >
    <div class="bg2"></div>
    <div class="file-container">

       <img class="file-container__icon" src="../../assets/file.png" />

      <div class="file-container__name">{{hero}}</div>
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
export class UploadComponent implements OnInit {

  selectedHero: string;

  constructor(public dialog: MatDialog, public uploadService: UploadService) {}

  public openUploadDialog() {
    const dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }

  onSelect(objectDetails: string): void {
    console.log(objectDetails);
  }

  ngOnInit(): void {
    this.uploadService.getFilesList();
  }
}
