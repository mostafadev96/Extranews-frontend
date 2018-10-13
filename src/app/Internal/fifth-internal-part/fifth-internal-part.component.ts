import {Component, Input, OnInit} from '@angular/core';
import {InternalService} from '../../Services/internal.service';
import {Post} from '../../Model/Post';

@Component({
  selector: 'app-fifth-internal-part',
  templateUrl: './fifth-internal-part.component.html',
  styleUrls: ['./fifth-internal-part.component.css']
})
export class FifthInternalPartComponent implements OnInit {
  featured: Array<Post>;
  API = '/post/';
  nextPageUrl: string;
  @Input() type: string;
  @Input() typeNumber: number;
  constructor(private iService: InternalService) { }

  ngOnInit() {
    this.iService.getPostPortion(this.typeNumber).subscribe(page => {
      this.featured = page.data;
      this.nextPageUrl = page.next_page_url;
    });
  }
  loadmore() {
    if (this.nextPageUrl) {
    this.iService.getNextPages(this.nextPageUrl).subscribe(page => {
      this.featured = page.data;
      this.nextPageUrl = page.next_page_url;
    });
    } else {
      console.log('No posts to show up!!');
    }
  }

}
