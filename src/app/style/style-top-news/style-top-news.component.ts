import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-style-top-news',
  templateUrl: './style-top-news.component.html',
  styleUrls: ['./style-top-news.component.css']
})
export class StyleTopNewsComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Input() posts: any;
  constructor() { }

  ngOnInit() {
  }

  myFunc(number: number) {
    this.valueChange.emit(number);
  }

}
