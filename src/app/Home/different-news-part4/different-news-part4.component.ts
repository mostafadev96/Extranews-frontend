import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../Model/Post';

@Component({
  selector: 'app-different-news-part4',
  templateUrl: './different-news-part4.component.html',
  styleUrls: ['./different-news-part4.component.css']
})
export class DifferentNewsPart4Component implements OnInit {
  menu = ['SPORTS', 'LIFE' , 'MONEY' , 'TECH' , 'TRAVEL' , 'STYLE' , 'WATCHER' , 'HEALTH' , 'JOB' , 'NETWORK' ];
  config: any = {
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => { return '<li class="swiper-pagination-page ' + className + '">' + (this.menu[index]) + '</li>' }
    },
    loop: true,
  };
  @Input() swiperPosts: Array<Post>;
  API = '/post/';
  constructor() { }

  ngOnInit() {
  }

}
