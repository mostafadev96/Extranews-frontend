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
import { InternalPostComponent } from './internal-post/internal-post.component';
import {routing} from './app.routing';
import { ServeErrorComponent } from './serve-error/serve-error.component';
import { FirstPartComponent } from './style/first-part/first-part.component';
import { SecondPartComponent } from './style/second-part/second-part.component';
import { ThirdPartComponent } from './style/third-part/third-part.component';
import { FourthPartComponent } from './style/fourth-part/fourth-part.component';
import { FifthPartComponent } from './style/fifth-part/fifth-part.component';
import { SixthPartComponent } from './style/sixth-part/sixth-part.component';
import { SeventhPartComponent } from './style/seventh-part/seventh-part.component';
import { StyleTopNewsComponent } from './style/style-top-news/style-top-news.component';
import { CultureTopNewsComponent } from './culture/culture-top-news/culture-top-news.component';
import { CultureSeventhPartComponent } from './culture/culture-seventh-part/culture-seventh-part.component';
import { CultureSixthPartComponent } from './culture/culture-sixth-part/culture-sixth-part.component';
import { CulutreFifthPartComponent } from './culture/culutre-fifth-part/culutre-fifth-part.component';
import { CultureFourthPartComponent } from './culture/culture-fourth-part/culture-fourth-part.component';
import { CultureThirdPartComponent } from './culture/culture-third-part/culture-third-part.component';
import { CultureSecondPartComponent } from './culture/culture-second-part/culture-second-part.component';
import { CultureFirstPartComponent } from './culture/culture-first-part/culture-first-part.component';
import { EntertainmentSeventhPartComponent } from './entertainment/entertainment-seventh-part/entertainment-seventh-part.component';
import { EntertainmentSixthPartComponent } from './entertainment/entertainment-sixth-part/entertainment-sixth-part.component';
import { EntertainmentFifthPartComponent } from './entertainment/entertainment-fifth-part/entertainment-fifth-part.component';
import { EntertainmentFourthPartComponent } from './entertainment/entertainment-fourth-part/entertainment-fourth-part.component';
import { EntertainmentThirdPartComponent } from './entertainment/entertainment-third-part/entertainment-third-part.component';
import { EntertainmentSecondPartComponent } from './entertainment/entertainment-second-part/entertainment-second-part.component';
import { EntertainmentFirstPartComponent } from './entertainment/entertainment-first-part/entertainment-first-part.component';
import { EntertainmentTopNewsComponent } from './entertainment/entertainment-top-news/entertainment-top-news.component';
import { GroomingTopNewsComponent } from './grooming/grooming-top-news/grooming-top-news.component';
import { GroomingFirstPartComponent } from './grooming/grooming-first-part/grooming-first-part.component';
import { GroomingSecondPartComponent } from './grooming/grooming-second-part/grooming-second-part.component';
import { GroomingThirdPartComponent } from './grooming/grooming-third-part/grooming-third-part.component';
import { GroomingFourthPartComponent } from './grooming/grooming-fourth-part/grooming-fourth-part.component';
import { GroomingFifthPartComponent } from './grooming/grooming-fifth-part/grooming-fifth-part.component';
import { GroomingSixthPartComponent } from './grooming/grooming-sixth-part/grooming-sixth-part.component';
import { GroomingSeventhPartComponent } from './grooming/grooming-seventh-part/grooming-seventh-part.component';


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
    FirstPartComponent,
    SecondPartComponent,
    ThirdPartComponent,
    FourthPartComponent,
    FifthPartComponent,
    SixthPartComponent,
    SeventhPartComponent,
    StyleTopNewsComponent,
    CultureTopNewsComponent,
    CultureSeventhPartComponent,
    CultureSixthPartComponent,
    CulutreFifthPartComponent,
    CultureFourthPartComponent,
    CultureThirdPartComponent,
    CultureSecondPartComponent,
    CultureFirstPartComponent,
    EntertainmentSeventhPartComponent,
    EntertainmentSixthPartComponent,
    EntertainmentFifthPartComponent,
    EntertainmentFourthPartComponent,
    EntertainmentThirdPartComponent,
    EntertainmentSecondPartComponent,
    EntertainmentFirstPartComponent,
    EntertainmentTopNewsComponent,
    GroomingTopNewsComponent,
    GroomingFirstPartComponent,
    GroomingSecondPartComponent,
    GroomingThirdPartComponent,
    GroomingFourthPartComponent,
    GroomingFifthPartComponent,
    GroomingSixthPartComponent,
    GroomingSeventhPartComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
