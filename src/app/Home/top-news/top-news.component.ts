import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  posts = [
    {
      id: 0,
      photo: 'assets/images/small.jpg',
      title: "Egypt's Sisi: Defaming security forces is 'high treason'",
      link: "#",
    },
    {
      id: 1,
      photo: 'assets/images/sisi.jpg',
      title: "Egypt's Sisi: Defaming security forces is 'high treason'",
      link: "#",
    },
    {
      id: 2,
      photo: 'assets/images/small.jpg',
      title: "Egypt's Sisi: Defaming security forces is 'high treason'",
      link: "#",
    }
    ];
  chosenPost = {};
  constructor() {
  }

  ngOnInit() {
    this.chosenPost = this.posts[0];
  }

  displayMain(number) {

    console.log(number)
    this.chosenPost = this.posts[number];
  }
}
