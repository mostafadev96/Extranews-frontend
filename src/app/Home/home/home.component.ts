import { Component, OnInit } from '@angular/core';
import {Post} from '../../Model/Post';
import {HomeService} from '../../Services/home.service';
import {Video} from '../../Model/Video';
import {Album} from '../../Model/Album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private hService: HomeService) { }
  todayPosts: Array<Post>;
  topPosts: Array<Post>;
  latestVideos: Array<Video>;
  latestAlbum: Album;
  swiperPosts: any;
  ngOnInit() {
    this.hService.getLatestGeneralPosts().subscribe(data => {
      this.todayPosts = data;
    });
    this.hService.getTopGeneralPosts().subscribe(data => {
      this.topPosts = data;
    });
    this.hService.getLatestVideos().subscribe(data => {
      this.latestVideos = data;
    });
    this.hService.getLatestAlbum().subscribe(data => {
      this.latestAlbum = data;
    });
    this.hService.getSliderPosts().subscribe(data => {
      this.swiperPosts = data;
    });

  }

}
