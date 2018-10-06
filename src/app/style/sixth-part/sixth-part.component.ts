import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-part',
  templateUrl: './sixth-part.component.html',
  styleUrls: ['./sixth-part.component.css']
})
export class SixthPartComponent implements OnInit {
  adds = [
    {
      title : "Lebrons Cleveland Cavaiers Fire Coach Midseason",
      photo: 'assets/images/internalad.jpg',
    },
    {
      title : "Lebrons Cleveland Cavaiers Fire Coach Midseason",
      photo: 'assets/images/internalad.jpg',
    },
    {
      title : "Lebrons Cleveland Cavaiers Fire Coach Midseason",
      photo: 'assets/images/internalad.jpg',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
