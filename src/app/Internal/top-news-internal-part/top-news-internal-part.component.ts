import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-news-internal-part',
  templateUrl: './top-news-internal-part.component.html',
  styleUrls: ['./top-news-internal-part.component.css']
})
export class TopNewsInternalPartComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Input() posts: any;
  constructor() { }

  ngOnInit() {
  }

  myFunc(number: number) {
    this.valueChange.emit(number);
  }

}
