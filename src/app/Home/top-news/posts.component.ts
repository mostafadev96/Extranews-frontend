import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() posts: any;
  constructor() { }

  ngOnInit() {
  }

  myFunc(number: number) {
    this.valueChange.emit(number);
  }
}
