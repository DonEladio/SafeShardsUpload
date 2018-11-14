import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'upload', component: FileUploadComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'upload', pathMatch: 'full'},
  {path: '**', redirectTo: 'upload', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
