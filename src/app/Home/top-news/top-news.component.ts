import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../Model/Post';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  @Input() posts: Array<Post>;
  API = '/post/';
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
