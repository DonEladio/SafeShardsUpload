import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  template: `
    <div class="container">
      <app-upload></app-upload>
    </div>
  `,
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
