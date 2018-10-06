import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-part',
  templateUrl: './fourth-part.component.html',
  styleUrls: ['./fourth-part.component.css']
})
export class FourthPartComponent implements OnInit {
  config: any = {
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };
    slides: [
      'assets/images/internal1.jpg',
      'assets/images/internal1.jpg',
      'assets/images/internal1.jpg',
      'assets/images/internal1.jpg'
    ];
  constructor() { }

  ngOnInit() {
  }

}
