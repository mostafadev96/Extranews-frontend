import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-videos',
  templateUrl: './home-videos.component.html',
  styleUrls: ['./home-videos.component.css']
})
export class HomeVideosComponent implements OnInit {
  videos = [
    {
      id: 0,
      photo: 'assets/images/video.jpg',
      title: "Egypt's Sisi: Defaming security forces is 'high treason'",
      link: "#",
      since : "25 min",
      duration : "03:45"
    },
    {
      id: 1,
      photo: 'assets/images/moo.jpg',
      title: "Lorem Ipsum is simply dummy text of the printing ",
      link: "#",
      since : "25 min",
      duration : "03:15"
    },
    {
      id: 2,
      photo: 'assets/images/belowMo.jpg',
      title: "Lorem Ipsum is simply dummy text of the printing ",
      link: "#",
      since : "25 min",
      duration : "03:15"
    },
    {
      id: 3,
      photo: 'assets/images/moo.jpg',
      title: "Lorem Ipsum is simply dummy text of the printing ",
      link: "#",
      since : "25 min",
      duration : "03:15"
    }
  ];
  trendingVideo = {};
  constructor() { }

  ngOnInit() {
    this.trendingVideo = this.videos[0];
    this.videos = this.videos.slice( 1 , this.videos.length );
  }

}
