import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-post',
  templateUrl: './video-post.component.html',
  styleUrls: ['./video-post.component.css']
})
export class VideoPostComponent implements OnInit {
  @Input() post: any;
  @Input() trending: boolean;
  constructor() { }

  ngOnInit() {
  }

}
