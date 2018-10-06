import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-post',
  templateUrl: './internal-post.component.html',
  styleUrls: ['./internal-post.component.css']
})
export class InternalPostComponent implements OnInit {

  hidden = true;
  constructor() { }

  ngOnInit() {
  }

  hideUnhide() {
    this.hidden = !this.hidden;
  }

}
