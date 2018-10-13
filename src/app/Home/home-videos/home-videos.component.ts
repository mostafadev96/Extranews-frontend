import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-home-videos',
  templateUrl: './home-videos.component.html',
  styleUrls: ['./home-videos.component.css']
})
export class HomeVideosComponent implements OnInit {
  @Input() videos: any;
  trendingVideo = {};
  constructor() { }
  ngOnInit() {
    this.trendingVideo = this.videos[0];
    this.videos = this.videos.slice( 1 , this.videos.length );
  }

}
