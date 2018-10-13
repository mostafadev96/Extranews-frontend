import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../Model/Post';

@Component({
  selector: 'app-firstpart',
  templateUrl: './firstpart.component.html',
  styleUrls: ['./firstpart.component.css']
})
export class FirstpartComponent implements OnInit {
  config: any = {
    spaceBetween: 100,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  };
  @Input() slides: Array<Post>;
  today: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
