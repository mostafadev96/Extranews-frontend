import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  config: any = {
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };
  recentAlbum = {
    title : "Egypt's Sisi: Defaming security forces is 'high treason'",
    link : '#',
    slides : [
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
      'assets/images/video.jpg',
    ]
  };
  num = 1;
  constructor() { }

  ngOnInit() {
  }
  changeSlide(index: number): void {
    this.num = index + 1;
    console.log(this.num);
  }
}
