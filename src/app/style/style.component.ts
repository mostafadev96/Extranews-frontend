import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  type = 'style';
  typeNumber = 1;
  constructor() { }

  ngOnInit() {
  }

}
