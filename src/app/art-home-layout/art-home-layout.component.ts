import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-home-layout',
  templateUrl: './art-home-layout.component.html',
  styleUrls: ['./art-home-layout.component.css']
})
export class ArtHomeLayoutComponent implements OnInit {
  hidden = true;
  constructor() { }

  ngOnInit() {
  }

  hideUnhide() {
    this.hidden = !this.hidden;
  }

}
