import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  API = 'http://127.0.0.1:8000/api/';
  constructor(private myhttp: HttpClient) { }
  findPost(postID): Observable<any> {
    return this.myhttp.get(this.API + `post/${postID}` );
  }

}
