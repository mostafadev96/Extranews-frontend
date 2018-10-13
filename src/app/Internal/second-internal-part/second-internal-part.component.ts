import {Component, Input, OnInit} from '@angular/core';
import {InternalService} from '../../Services/internal.service';
import {Post} from '../../Model/Post';

@Component({
  selector: 'app-second-internal-part',
  templateUrl: './second-internal-part.component.html',
  styleUrls: ['./second-internal-part.component.css']
})
export class SecondInternalPartComponent implements OnInit {

  posts: Array<Post>;
  chosenPost: Post;
  API = '/post/';
  @Input() type: string;
  @Input() typeNumber: number;
  constructor(private iService: InternalService) { }
  ngOnInit() {
    this.iService.getTopInternalPosts(this.typeNumber).subscribe(data => {
      this.posts = data;
    });
    this.chosenPost = this.posts[0];
  }
  displayMain(number) {

    console.log(number);
    this.chosenPost = this.posts[number];
  }
}
