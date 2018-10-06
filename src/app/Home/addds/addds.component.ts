import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addds',
  templateUrl: './addds.component.html',
  styleUrls: ['./addds.component.css']
})
export class AdddsComponent implements OnInit {
  ads = [
    {
      title : "Egypt's Sisi: Defaming security forces is 'high treason'",
      photo: 'assets/images/small.jpg',
      author : 'amruismaiil',
      since : '25 min',
      link : '#',
    },
    {
      title : "Egypt's Sisi: Defaming security forces is 'high treason'",
      photo: 'assets/images/small.jpg',
      author : 'amruismaiil',
      since : '25 min',
      link : '#',
    },
    {
      title : "Egypt's Sisi: Defaming security forces is 'high treason'",
      photo: 'assets/images/small.jpg',
      author : 'amruismaiil',
      since : '25 min',
      link : '#',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
