import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AboutComponent } from './about/about.component';
import { UploadModule } from './upload/upload.module';
@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
