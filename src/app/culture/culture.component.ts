import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {
  type = 'culture';
  typeNumber = 3;
  constructor() { }

  ngOnInit() {
  }

}
