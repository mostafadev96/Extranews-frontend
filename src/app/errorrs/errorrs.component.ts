import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorrs',
  templateUrl: './errorrs.component.html',
  styleUrls: ['./errorrs.component.css']
})
export class ErrorrsComponent implements OnInit {
  hidden = true;
  constructor() { }

  ngOnInit() {
  }

  hideUnhide() {
    this.hidden = !this.hidden;
  }

}
