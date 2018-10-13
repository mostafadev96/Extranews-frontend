import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  fileUpload(event) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('photo', file, file.name);
      this.http.post<any>('http://127.0.0.1:8000/api/uploadphoto', {
        'photo': file
      }, httpOptions)
        .subscribe(data => console.log(data.image));
    }

  }

}
