import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  livePost = {
    photo : 'assets/images/video.jpg',
    title : "Egypt's Sisi: Defaming security forces is 'high treason'"
  };
  constructor() { }

  ngOnInit() {
  }

}
