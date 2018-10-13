import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  API = 'http://127.0.0.1:8000/api/';
  constructor(private myhttp: HttpClient) { }
  getLatestGeneralPosts(): Observable<any> {
    return this.myhttp.get(this.API + 'general/latest' );
  }
  getTopGeneralPosts(): Observable<any> {
    return this.myhttp.get(this.API + 'general/top' );
  }
  getSliderPosts(): Observable<any> {
    return this.myhttp.get(this.API + 'general/slider' );
  }
  getLatestVideos(): Observable<any> {
    return this.myhttp.get(this.API + 'video/latest' );
  }
  getLatestAlbum(): Observable<any> {
    return this.myhttp.get(this.API + 'album/latest' );
  }

}
