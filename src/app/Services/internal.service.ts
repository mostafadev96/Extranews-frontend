import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalService {
  API = 'http://127.0.0.1:8000/api/';
  constructor(private myhttp: HttpClient) { }
  getLatestInternalPosts(tableID): Observable<any> {
    return this.myhttp.get(this.API + `post/latest/${tableID}` );
  }
  getTopInternalPosts(tableID): Observable<any> {
    return this.myhttp.get(this.API + `post/top/${tableID}` );
  }
  getNextPages(url): Observable<any> {
    return this.myhttp.get(url);
  }
  getPostPortion(tableID): Observable<any> {
    return this.myhttp.get(this.API + 'album/latest' );
  }
}
