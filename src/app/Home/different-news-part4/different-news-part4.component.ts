import { Component, OnInit } from '@angular/core';

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
  swiperPosts = [
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
      {
        photo : 'assets/images/news.jpg',
        title : 'Mohamed Salah can improve in front of goal, says Jurgen Klopp',
        description : 'Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring record could ' +
        'be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds since' +
        ' his £36million move from Roma last summer Liverpool boss Jurgen Klopp believes Mohamed Salah’s scoring' +
        ' record could be even better this season. The Egyptian’s scored 12 goals in 17 appearances for the Reds' +
        ' since his £36million move from Roma last summer',
        link: '#'
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
