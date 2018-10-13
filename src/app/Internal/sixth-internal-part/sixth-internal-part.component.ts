import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sixth-internal-part',
  templateUrl: './sixth-internal-part.component.html',
  styleUrls: ['./sixth-internal-part.component.css']
})
export class SixthInternalPartComponent implements OnInit {
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
  @Input() type: string;
  @Input() typeNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
