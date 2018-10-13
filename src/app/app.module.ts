import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { StyleComponent } from './style/style.component';
import { WomenComponent } from './women/women.component';
import { CultureComponent } from './culture/culture.component';
import { GroomingComponent } from './grooming/grooming.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { VideosComponent } from './videos/videos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {SwiperModule} from 'ngx-swiper-wrapper';
import { FirstpartComponent } from './Home/firstpart/firstpart.component';
import { TopNewsComponent } from './Home/top-news/top-news.component';
import { DifferentNewsPart4Component } from './Home/different-news-part4/different-news-part4.component';
import { LiveComponent } from './Home/live/live.component';
import { GalleryComponent } from './Home/gallery/gallery.component';
import { PostsComponent } from './Home/top-news/posts.component';
import { HomeVideosComponent } from './Home/home-videos/home-videos.component';
import { SubscribeComponent } from './Home/subscribe/subscribe.component';
import { AdddsComponent } from './Home/addds/addds.component';
import { ErrorrsComponent } from './errorrs/errorrs.component';
import { ArtHomeLayoutComponent } from './art-home-layout/art-home-layout.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { InternalPostComponent } from './Internal/internal-post/internal-post.component';
import {routing} from './app.routing';
import { ServeErrorComponent } from './serve-error/serve-error.component';
import { ArtStyleComponent } from './Article/art-style/art-style.component';
import { ArtCultureComponent } from './Article/art-culture/art-culture.component';
import { ArtGroomingComponent } from './Article/art-grooming/art-grooming.component';
import { ArtEntertainmentComponent } from './Article/art-entertainment/art-entertainment.component';
import { ArtWomenComponent } from './Article/art-women/art-women.component';
import { ArtVideosComponent } from './Article/art-videos/art-videos.component';
import { VideoPostComponent } from './video-post/video-post.component';
import { SeventhInternalPartComponent } from './Internal/seventh-internal-part/seventh-internal-part.component';
import { SixthInternalPartComponent } from './Internal/sixth-internal-part/sixth-internal-part.component';
import { FifthInternalPartComponent } from './Internal/fifth-internal-part/fifth-internal-part.component';
import { FourthInternalPartComponent } from './Internal/fourth-internal-part/fourth-internal-part.component';
import { ThirdInternalPartComponent } from './Internal/third-internal-part/third-internal-part.component';
import { SecondInternalPartComponent } from './Internal/second-internal-part/second-internal-part.component';
import { FirstInternalPartComponent } from './Internal/first-internal-part/first-internal-part.component';
import { TopNewsInternalPartComponent } from './Internal/top-news-internal-part/top-news-internal-part.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {HttpClientModule} from '@angular/common/http';
import {ArticleService} from './Services/article.service';
import {HomeService} from './Services/home.service';
import {InternalService} from './Services/internal.service';
import { MinuteSecondsPipe } from './minute-seconds.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StyleComponent,
    WomenComponent,
    CultureComponent,
    GroomingComponent,
    EntertainmentComponent,
    VideosComponent,
    NotfoundComponent,
    FirstpartComponent,
    TopNewsComponent,
    DifferentNewsPart4Component,
    LiveComponent,
    GalleryComponent,
    PostsComponent,
    HomeVideosComponent,
    SubscribeComponent,
    AdddsComponent,
    ErrorrsComponent,
    ArtHomeLayoutComponent,
    SearchResultComponent,
    InternalPostComponent,
    ServeErrorComponent,
    ArtStyleComponent,
    ArtCultureComponent,
    ArtGroomingComponent,
    ArtEntertainmentComponent,
    ArtWomenComponent,
    ArtVideosComponent,
    VideoPostComponent,
    SeventhInternalPartComponent,
    SixthInternalPartComponent,
    FifthInternalPartComponent,
    FourthInternalPartComponent,
    ThirdInternalPartComponent,
    SecondInternalPartComponent,
    FirstInternalPartComponent,
    TopNewsInternalPartComponent,
    UploadFileComponent,
    MinuteSecondsPipe,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    HttpClientModule,
    routing
  ],
  providers: [ArticleService, HomeService, InternalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
