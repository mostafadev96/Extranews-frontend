import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  type = 'entertainment';
  typeNumber = 5;
  constructor() { }

  ngOnInit() {
  }

}
