import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-seventh-internal-part',
  templateUrl: './seventh-internal-part.component.html',
  styleUrls: ['./seventh-internal-part.component.css']
})
export class SeventhInternalPartComponent implements OnInit {
  @Input() type: string;
  @Input() typeNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
