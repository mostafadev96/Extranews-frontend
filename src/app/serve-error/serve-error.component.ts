import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-serve-error',
  templateUrl: './serve-error.component.html',
  styleUrls: ['./serve-error.component.css']
})
export class ServeErrorComponent implements OnInit {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
