import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ['./grooming.component.css']
})
export class GroomingComponent implements OnInit {
  type = 'entertainment';
  typeNumber = 4;
  constructor() { }

  ngOnInit() {
  }

}
