import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../Model/Post';
import {InternalService} from '../../Services/internal.service';

@Component({
  selector: 'app-first-internal-part',
  templateUrl: './first-internal-part.component.html',
  styleUrls: ['./first-internal-part.component.css']
})
export class FirstInternalPartComponent implements OnInit {
  config: any = {
    spaceBetween: 100,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  };
  today: number = Date.now();
  todayPosts: Array<Post>;
  @Input() type: string;
  @Input() typeNumber: number;
  constructor(private iService: InternalService) { }

  ngOnInit() {
    this.iService.getLatestInternalPosts(this.typeNumber).subscribe(data => {
      this.todayPosts = data;
    });
  }

}
