import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const url = 'http://localhost:3000/upload';

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) {}

  public upload(files: Set<File>): { [key: string]: Observable<number> } {
    // this will be the our resulting map
    const status = {};

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      debugger;
      const req = new HttpRequest('POST', url, formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      const min = 50;
      const max = 200;
      const uploadProgress = Math.floor(Math.random()*(max-min+1)+min);

const source = interval(uploadProgress);

const timer$ = timer(uploadProgress*12);
const example = source.pipe(takeUntil(timer$));
const subscribe = example.subscribe(val => {
  progress.next(val * 10);
  if (val === 10) {
  progress.complete();
  }
});


      // send the http-request and subscribe for progress-updates
/*
      let startTime = new Date().getTime();
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage

          const percentDone = Math.round((100 * event.loaded) / event.total);
          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      });*/

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }
}
