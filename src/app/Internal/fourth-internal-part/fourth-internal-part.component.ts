import {Component, Input, OnInit} from '@angular/core';
import {InternalService} from '../../Services/internal.service';
import {Album} from '../../Model/Album';

@Component({
  selector: 'app-fourth-internal-part',
  templateUrl: './fourth-internal-part.component.html',
  styleUrls: ['./fourth-internal-part.component.css']
})
export class FourthInternalPartComponent implements OnInit {
  config: any = {
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };
  slides: Album;
  @Input() type: string;
  @Input() typeNumber: number;
  constructor(private iService: InternalService) { }

  ngOnInit() {
    this.iService.getLatestAlbum().subscribe(data => {
      this.slides = data;
    });
  }

}
